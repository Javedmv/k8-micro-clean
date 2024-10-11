import server from './Presentation/Server';
import dbConnection from './Infrastructure/Database/dbConnection';

(async () => {
    try {
      server;
      await dbConnection().catch((error: any) => {
          console.error("Database connection error:", error.message);
          process.exit(1);
      });
      console.log("Admin service initialized successfully");
    } catch (error: any) {
      console.error("Admin service initialization failed:", error.message);
          process.exit(1);
    }
  })();