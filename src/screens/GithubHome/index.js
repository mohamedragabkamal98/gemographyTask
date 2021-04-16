import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, Keyboard, RefreshControl, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import RepoCard from "../../components/RepoCards"
import NoData from "../../components/NoData"
import Header from "../../components/Header"
import apiData, { getRepo } from "../../api/ApisFunctions"
import metrics, { calcHeight, calcWidth } from '../../components/metrics';
import axios from "axios"

export default GithubHome = (props) => {

    // setAppLanguage("en", true);
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [refresh, setRefresh] = useState(false)

    const refreshing = () => {
        getRepo(1)
    }

    const getRepo = () => {
        axios.get(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`)
            .then(function (response) {
                console.log("respnse of Repo Api ::>>", response.data.items);
                setData(response.data.items)
            })
            .catch(function (error) {
                console.log("error of Repo Api ::>>", error);
            });

    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        )

    }

    const loadMore = () => {
        setPage(page + 1)
        getRepo()
    }


    useEffect(() => {
        getRepo(1)
    }, [])


    //Render
    return (
        <View style={styles.container}>
            <Header title={"Trending Repo"} />
            <ScrollView style={{ flex: 1 }}>
                <View>
                    <FlatList
                        data={data}
                        keyExtractor={item=>item.id}
                        style={{ width: calcWidth(375) }}
                        contentContainerStyle={{ paddingVertical: calcHeight(10), }}
                        ListFooterComponent={renderFooter()}
                        ListEmptyComponent={
                            <View style={{ height: metrics.screenHeight, alignSelf: 'center' }}>
                                <NoData />
                            </View>
                        }
                        ItemSeparatorComponent={() => <View style={{ height: calcWidth(17), borderBottomColor: '#ECECEC', borderBottomWidth: 1 }} />}
                        renderItem={({ item, index }) => {
                            return (
                                <RepoCard data={item} />
                            )
                        }}
                        refreshing={refresh}
                        onRefresh={() => { refreshing(1) }}
                        onEndReached={() => loadMore()}
                        onEndReachedThreshold={100}
                    />
                </View>
            </ScrollView>
        </View>
    )

}
