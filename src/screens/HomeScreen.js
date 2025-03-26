/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { FlatList, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { fetchPublicFeed, searchPhotos } from '../services/unsplash';

const HomeScreen = () => {
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const flatListRef = useRef(null);

    useEffect(() => {
        loadPublicFeed();
    }, []);

    // Fetch public feed images
    const loadPublicFeed = async () => {
        const data = await fetchPublicFeed();
        setImages(data);
        scrollToTop();
    };

    // Handle search (triggered manually or on text change)
    const handleSearch = async () => {
        if (searchQuery.trim() === '') {
            loadPublicFeed();
        } else {
            const data = await searchPhotos(searchQuery);
            setImages(data);
            scrollToTop();
        }
    };

    // Scroll to top of FlatList
    const scrollToTop = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: 0, animated: true });
        }
    };

    // Automatically revert to public feed when search text is cleared
    const handleSearchTextChange = (text) => {
        setSearchQuery(text);
        if (text === '') {
            loadPublicFeed();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search photos..."
                value={searchQuery}
                onChangeText={handleSearchTextChange}
                onSubmitEditing={handleSearch}
                style={styles.searchBar}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch} >
                <Text style={styles.textStyle}>Search Button</Text>
            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.imageCard}>
                        <FastImage
                            source={{ uri: item.urls.regular }}
                            style={styles.image}
                        />
                        <Text>{item.description || item.alt_description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchBar: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
    },
    searchButton: {
        height: 40,
        marginBottom: 10,
        backgroundColor: 'cyan',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
    },
    imageCard: {
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
});

export default HomeScreen;
