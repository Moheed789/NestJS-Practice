import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'My name is Moheed Siddiqui. I am a software developer specializing in full-stack web development. I have experience working with various technologies including JavaScript, TypeScript, Node.js, React, and databases like MongoDB and PostgreSQL. I enjoy building scalable and efficient web applications and am passionate about learning new technologies and improving my skills.';
  }
}
