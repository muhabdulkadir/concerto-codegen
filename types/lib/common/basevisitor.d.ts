export = BaseVisitor;
/**
 * Visitor class that traverses various model elements
 *
 * @protected
 * @class
 */
declare class BaseVisitor {
    /**
     * Visitor design pattern
     * @param {Object} thing - the object being visited
     * @param {Object} parameters  - the parameter
     * @return {Object} the result of visiting or null
     * @protected
     */
    protected visit(thing: any, parameters: any): any;
    /**
     * Visitor design pattern
     * @param {ModelManager} modelManager - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitModelManager(modelManager: ModelManager, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ModelFile} modelFile - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitModelFile(modelFile: ModelFile, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitAssetDeclaration(classDeclaration: ClassDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitEnumDeclaration(classDeclaration: ClassDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitEventDeclaration(classDeclaration: ClassDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitParticipantDeclaration(classDeclaration: ClassDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitTransactionDeclaration(classDeclaration: ClassDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {ClassDeclaration} classDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @param {string} type  - the type of the declaration
     * @protected
     */
    protected visitClassDeclaration(classDeclaration: ClassDeclaration, parameters: any, type?: string): void;
    /**
     * Visitor design pattern
     * @param {ScalarDeclaration} scalarDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitScalarDeclaration(scalarDeclaration: ScalarDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {MapDeclaration} mapDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitMapDeclaration(mapDeclaration: MapDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {Field} field - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitScalarField(field: Field, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {RelationshipDeclaration} relationship - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitRelationship(relationship: RelationshipDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {Field} field - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitField(field: Field, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {EnumValueDeclaration} enumValueDeclaration - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitEnumValueDeclaration(enumValueDeclaration: EnumValueDeclaration, parameters: any): void;
    /**
     * Visitor design pattern
     * @param {Decorator} decorator - the object being visited
     * @param {Object} parameters  - the parameter
     * @protected
     */
    protected visitDecorator(decorator: Decorator, parameters: any): void;
}
import { ModelManager } from "@accordproject/concerto-core";
import { ModelFile } from "@accordproject/concerto-core";
import { ClassDeclaration } from "@accordproject/concerto-core";
import { ScalarDeclaration } from "@accordproject/concerto-core";
import { Field } from "@accordproject/concerto-core";
import { RelationshipDeclaration } from "@accordproject/concerto-core";
import { EnumValueDeclaration } from "@accordproject/concerto-core";
import { Decorator } from "@accordproject/concerto-core";
