import sanityClient from '@sanity/client'

export const Client = sanityClient({
    projectId : 'dsd23iko',
    dataSet : 'production',
    apiVersion: '2021-03-25',
    token : 'sksmmTHTT46ykm4Cg4pnDE1CxJcLPASG46oLmG0u1IP7ZBJiqJ0FmNEg2YsaqCDzgiiGpw3gp8hwSAAniYK5W3UJ9Z9a0OJq2WQIRC9SZL4RCrfihOcR9QVrQ6xETJwahFQWv3CrIoUi4cINzQ4CHOZzwkyQomFYaLpRn6Xqup1qGRViSYQY',
    useCdn : false 
})