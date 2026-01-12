[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormField

# Class: FormField

Describes the data structure of each form field on the platform

**`Generated`**

from message Scailo.FormField

## Hierarchy

- `Message`\<[`FormField`](FormField.md)\>

  ↳ **`FormField`**

## Table of contents

### Constructors

- [constructor](FormField.md#constructor)

### Properties

- [code](FormField.md#code)
- [definedValues](FormField.md#definedvalues)
- [element](FormField.md#element)
- [entityUuid](FormField.md#entityuuid)
- [isHidden](FormField.md#ishidden)
- [isPublic](FormField.md#ispublic)
- [isReadonly](FormField.md#isreadonly)
- [isSearchable](FormField.md#issearchable)
- [metadata](FormField.md#metadata)
- [name](FormField.md#name)
- [placeholder](FormField.md#placeholder)
- [regex](FormField.md#regex)
- [sectionId](FormField.md#sectionid)
- [type](FormField.md#type)
- [width](FormField.md#width)
- [fields](FormField.md#fields)
- [runtime](FormField.md#runtime)
- [typeName](FormField.md#typename)

### Methods

- [clone](FormField.md#clone)
- [equals](FormField.md#equals)
- [fromBinary](FormField.md#frombinary)
- [fromJson](FormField.md#fromjson)
- [fromJsonString](FormField.md#fromjsonstring)
- [getType](FormField.md#gettype)
- [toBinary](FormField.md#tobinary)
- [toJSON](FormField.md#tojson)
- [toJson](FormField.md#tojson-1)
- [toJsonString](FormField.md#tojsonstring)
- [equals](FormField.md#equals-1)
- [fromBinary](FormField.md#frombinary-1)
- [fromJson](FormField.md#fromjson-1)
- [fromJsonString](FormField.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormField**(`data?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormField`](FormField.md)\> |

#### Returns

[`FormField`](FormField.md)

#### Overrides

Message\&lt;FormField\&gt;.constructor

#### Defined in

[src/forms_fields.scailo_pb.ts:181](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L181)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form field is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/forms_fields.scailo_pb.ts:102](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L102)

___

### definedValues

• **definedValues**: `string`[] = `[]`

The possible values that are applicable on the form field (in case of dropdowns, radio buttons, checkboxes)

**`Generated`**

from field: repeated string defined_values = 17;

#### Defined in

[src/forms_fields.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L151)

___

### element

• **element**: [`FORM_FIELD_ELEMENT`](../enums/FORM_FIELD_ELEMENT.md) = `FORM_FIELD_ELEMENT.FORM_FIELD_ELEMENT_ANY_UNSPECIFIED`

The type of the element

**`Generated`**

from field: Scailo.FORM_FIELD_ELEMENT element = 14;

#### Defined in

[src/forms_fields.scailo_pb.ts:130](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L130)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/forms_fields.scailo_pb.ts:81](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L81)

___

### isHidden

• **isHidden**: `boolean` = `false`

Denotes if the field is hidden (field shall not be visible on the UI). The field shall be visible only through the API

**`Generated`**

from field: bool is_hidden = 31;

#### Defined in

[src/forms_fields.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L165)

___

### isPublic

• **isPublic**: `boolean` = `false`

Denotes if the field is public (field shall be visible on any custom designed public interfaces)

**`Generated`**

from field: bool is_public = 33;

#### Defined in

[src/forms_fields.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L179)

___

### isReadonly

• **isReadonly**: `boolean` = `false`

Denotes if the field is readonly (changes shall not be allowed to be made on the UI). Any changes will still be made through the API

**`Generated`**

from field: bool is_readonly = 30;

#### Defined in

[src/forms_fields.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L158)

___

### isSearchable

• **isSearchable**: `boolean` = `false`

Denotes if the field is searchable (field shall not be visible on the UI in the filters view). The field will continue to be searchable through the API

**`Generated`**

from field: bool is_searchable = 32;

#### Defined in

[src/forms_fields.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L172)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/forms_fields.scailo_pb.ts:88](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L88)

___

### name

• **name**: `string` = `""`

The name of the form field

**`Generated`**

from field: string name = 10;

#### Defined in

[src/forms_fields.scailo_pb.ts:95](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L95)

___

### placeholder

• **placeholder**: `string` = `""`

The placeholder of the form field

**`Generated`**

from field: string placeholder = 15;

#### Defined in

[src/forms_fields.scailo_pb.ts:137](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L137)

___

### regex

• **regex**: `string` = `""`

The regex that is applicable on the form field

**`Generated`**

from field: string regex = 16;

#### Defined in

[src/forms_fields.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L144)

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form section that the form field belongs to

**`Generated`**

from field: uint64 section_id = 12;

#### Defined in

[src/forms_fields.scailo_pb.ts:116](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L116)

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form field

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

[src/forms_fields.scailo_pb.ts:109](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L109)

___

### width

• **width**: `string` = `""`

The width of the form field

**`Generated`**

from field: string width = 13;

#### Defined in

[src/forms_fields.scailo_pb.ts:123](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L123)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields.scailo_pb.ts:188](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L188)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L186)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormField"``

#### Defined in

[src/forms_fields.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L187)

## Methods

### clone

▸ **clone**(): [`FormField`](FormField.md)

Create a deep copy.

#### Returns

[`FormField`](FormField.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`FormField`](FormField.md) \| `PlainMessage`\<[`FormField`](FormField.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`FormField`](FormField.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormField`](FormField.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`FormField`](FormField.md) \| `PlainMessage`\<[`FormField`](FormField.md)\> |
| `b` | `undefined` \| [`FormField`](FormField.md) \| `PlainMessage`\<[`FormField`](FormField.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields.scailo_pb.ts:218](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L218)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L206)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L210)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/7c8082796d1ee35579f9f1a973974add6b332cf6/src/forms_fields.scailo_pb.ts#L214)
