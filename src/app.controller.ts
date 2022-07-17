import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { title } from 'process';
import { stringify } from 'querystring';
import { runtime } from 'webpack';
import { AppService } from './app.service';
import { Todo } from './todo/entities/todo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/') test(@Query('soba') soba: string): Object {

    let curlResponse;

    let test = {
      glossary: {
        title: 'example glossary',
        da: soba,
      },
    };

    return test;
  }

  @Get('/login') login(): Object {
    let test = {
      glossary: {
        title: 'example login',
        GlossDiv: {
          title: 'S',
          GlossList: {
            GlossEntry: {
              ID: 'SGML',
              SortAs: 'SGML',
              GlossTerm: 'Standard Generalized Markup Language',
              Acronym: 'SGML',
              Abbrev: 'ISO 8879:1986',
              GlossDef: {
                para: 'A meta-markup language, used to create markup languages such as DocBook.',
                GlossSeeAlso: ['GML', 'XML'],
              },
              GlossSee: 'markup',
            },
          },
        },
      },
    };

    return test;
  }
}
