import { Accordion } from "./accordion";

export interface Glossary {
    code: string;
    description: string;
    accordion: Accordion[];
}

export const GLOSSARY: Glossary[] = [
    {
        code: "OOP",
        description: "Object Oriented Programming is a programming paradigm based on the concept of objects.",
        accordion: []
    },
    {
        code: "OOP",
        description: "Its main feature is called A-PIE.",
        accordion: [
            {
                title: 'Abstraction',
                description: '',
                body: 'It is a technique for arranging the complexity of a system by suppressing the more complex details below its current level.'
            },
            {
                title: 'Polymorphism',
                description: '',
                body: 'It is the ability of an object to take on many form.'
            },
            {
                title: 'Inheritance',
                description: '',
                body: 'It is a feature that represents the "IS-A" relationship between classes. '
                    + 'The child class inherits the visible properties and methods of its parent while adding new properties and methods of its own.'
            },
            {
                title: 'Encapsulation',
                description: '',
                body: 'It is the mechanism for restricting direct access to some of the object\'s components.'
            },
        ]
    },
    {
        code: "Design Pattern",
        description: "A design pattern is a named solution to a commonly occurring problem in software design.",
        accordion: [
            {
                title: 'Strategy',
                description: '',
                body: 'Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.'
            },
            {
                title: 'Observer',
                description: '',
                body: 'Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.'
            },
            {
                title: 'Decorator',
                description: '',
                body: 'Decorator Pattern attaches additional responsibilities to an object dynamically. Decorator provides a flexible alternative to sub-classing for extending functionality.'
            },
            {
                title: 'Factory Method',
                description: '',
                body: 'Factory method pattern defines an interface for creating an object, but lets sub-classes decide which class to instantiate. Factory method lets a class defer instantiation to sub-class.'
            },
            {
                title: 'Abstract Factory',
                description: '',
                body: 'Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete class.'
            },
            {
                title: 'Singleton',
                description: '',
                body: 'Singleton Pattern ensures a class has only one instance, and provides a global point access to it.'
            },
            {
                title: 'Adapter',
                description: '',
                body: 'Adapter pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn\'t otherwise because of incompatible interfaces.'
            },
            {
                title: 'Facade',
                description: '',
                body: 'Facade Pattern provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.'
            },
            {
                title: 'Template Method',
                description: '',
                body: 'Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to sub-classes. Template Method lets sub-classes redefine certain steps of an algorithm without changing the algorithm\'s structure.'
            },
            {
                title: 'Proxy',
                description: '',
                body: 'Proxy Pattern provides a surrogate or placeholder or another object to control access to it, which may be remote, expensive to create or in need of securing.'
            },
            {
                title: 'Composite',
                description: '',
                body: 'Composite Patter allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.'
            },
            {
                title: 'MVC',
                description: '',
                body: 'The Model View Controller is a compound pattern consisting of the Observer, Strategy, and Composite patterns. These patterns work together to decouple the three players in the MVC model, which is used to separate application\'s concerns.'
            }
        ]
    }
]