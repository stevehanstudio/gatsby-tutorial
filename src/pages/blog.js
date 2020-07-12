import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

const blog = () => {
   return (
      <Layout>
      <div className={styles.page}>
            <h1>this is our blog page</h1>
            <p className={styles.text}>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia possimus accusantium incidunt laboriosam velit vel veniam doloremque saepe ducimus odit, rem temporibus libero dolores eum dolore ullam quaerat dolorum officiis?
            </p>
      </div>
      </Layout>
   )
}

export default blog
