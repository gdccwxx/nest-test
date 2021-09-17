import { Injectable } from '@nestjs/common';
import { Sensitive } from './entities/sensitive.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensitiveType } from './constants';

@Injectable()
export class SensitiveService {
    constructor(
        @InjectRepository(Sensitive)
        private readonly sensitiveRepository: Repository<Sensitive>,
    ) {}

    async setSensitive(type: SensitiveType, pathname: string, parameters: any, results: any) {
        return await this.sensitiveRepository.save({
            type,
            pathname,
            parameters,
            results,
        }).catch(e => e);
    }

    async getSensitive(type: SensitiveType) {
        return await this.sensitiveRepository.find({ 
            where: {
                type,
            }
        });
    }
}
