import server from './Presentation/Server'
import dbConnection from './Infrastructure/Database/Dbconnections'

(async () => {
    try {
        server; 
        await dbConnection()
    } catch (error: any) {
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})()