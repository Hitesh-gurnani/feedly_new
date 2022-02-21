import React from 'react'
import { Router, useRouter } from 'next/router'
import Layout from './../../component/Layout';
export default function Singlenews() {
    const router = useRouter();
    return (
        <Layout>
            <div>Singlenews</div>
            <div>{router.query.slug}</div>
        </Layout>
    );
}
