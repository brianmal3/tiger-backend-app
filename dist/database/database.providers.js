"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("../customer/entities/customer.entity");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const host = process.env.PGHOST;
            const user = process.env.PGUSER;
            const password = process.env.PGPASSWORD;
            const db = process.env.PGDATABASE;
            common_1.Logger.log(`Database config; dataSource to be set up: ${db}`);
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: host,
                port: 5432,
                username: user,
                password: password,
                database: db,
                entities: [customer_entity_1.Customer, user_entity_1.User],
                synchronize: true,
                ssl: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map