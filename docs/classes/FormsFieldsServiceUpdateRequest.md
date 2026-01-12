[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsFieldsServiceUpdateRequest

# Class: FormsFieldsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a form field

**`Generated`**

from message Scailo.FormsFieldsServiceUpdateRequest

## Hierarchy

- `Message`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\>

  ↳ **`FormsFieldsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](FormsFieldsServiceUpdateRequest.md#constructor)

### Properties

- [code](FormsFieldsServiceUpdateRequest.md#code)
- [definedValues](FormsFieldsServiceUpdateRequest.md#definedvalues)
- [id](FormsFieldsServiceUpdateRequest.md#id)
- [isHidden](FormsFieldsServiceUpdateRequest.md#ishidden)
- [isPublic](FormsFieldsServiceUpdateRequest.md#ispublic)
- [isReadonly](FormsFieldsServiceUpdateRequest.md#isreadonly)
- [isSearchable](FormsFieldsServiceUpdateRequest.md#issearchable)
- [name](FormsFieldsServiceUpdateRequest.md#name)
- [placeholder](FormsFieldsServiceUpdateRequest.md#placeholder)
- [regex](FormsFieldsServiceUpdateRequest.md#regex)
- [sectionId](FormsFieldsServiceUpdateRequest.md#sectionid)
- [userComment](FormsFieldsServiceUpdateRequest.md#usercomment)
- [width](FormsFieldsServiceUpdateRequest.md#width)
- [fields](FormsFieldsServiceUpdateRequest.md#fields)
- [runtime](FormsFieldsServiceUpdateRequest.md#runtime)
- [typeName](FormsFieldsServiceUpdateRequest.md#typename)

### Methods

- [clone](FormsFieldsServiceUpdateRequest.md#clone)
- [equals](FormsFieldsServiceUpdateRequest.md#equals)
- [fromBinary](FormsFieldsServiceUpdateRequest.md#frombinary)
- [fromJson](FormsFieldsServiceUpdateRequest.md#fromjson)
- [fromJsonString](FormsFieldsServiceUpdateRequest.md#fromjsonstring)
- [getType](FormsFieldsServiceUpdateRequest.md#gettype)
- [toBinary](FormsFieldsServiceUpdateRequest.md#tobinary)
- [toJSON](FormsFieldsServiceUpdateRequest.md#tojson)
- [toJson](FormsFieldsServiceUpdateRequest.md#tojson-1)
- [toJsonString](FormsFieldsServiceUpdateRequest.md#tojsonstring)
- [equals](FormsFieldsServiceUpdateRequest.md#equals-1)
- [fromBinary](FormsFieldsServiceUpdateRequest.md#frombinary-1)
- [fromJson](FormsFieldsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](FormsFieldsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsFieldsServiceUpdateRequest**(`data?`): [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\> |

#### Returns

[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Overrides

Message\&lt;FormsFieldsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/forms_fields.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L583)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form field is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/forms_fields.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L518)

___

### definedValues

• **definedValues**: `string`[] = `[]`

The possible values that are applicable on the form field (in case of dropdowns, radio buttons, checkboxes)

**`Generated`**

from field: repeated string defined_values = 17;

#### Defined in

[src/forms_fields.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L553)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the form field that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/forms_fields.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L504)

___

### isHidden

• **isHidden**: `boolean` = `false`

Denotes if the field is hidden (field shall not be visible on the UI). The field shall be visible only through the API

**`Generated`**

from field: bool is_hidden = 31;

#### Defined in

[src/forms_fields.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L567)

___

### isPublic

• **isPublic**: `boolean` = `false`

Denotes if the field is public (field shall be visible on any custom designed public interfaces)

**`Generated`**

from field: bool is_public = 33;

#### Defined in

[src/forms_fields.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L581)

___

### isReadonly

• **isReadonly**: `boolean` = `false`

Denotes if the field is readonly (changes shall not be allowed to be made on the UI). Any changes will still be made through the API

**`Generated`**

from field: bool is_readonly = 30;

#### Defined in

[src/forms_fields.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L560)

___

### isSearchable

• **isSearchable**: `boolean` = `false`

Denotes if the field is searchable (field shall not be visible on the UI in the filters view). The field will continue to be searchable through the API

**`Generated`**

from field: bool is_searchable = 32;

#### Defined in

[src/forms_fields.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L574)

___

### name

• **name**: `string` = `""`

The name of the form field

**`Generated`**

from field: string name = 10;

#### Defined in

[src/forms_fields.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L511)

___

### placeholder

• **placeholder**: `string` = `""`

The placeholder of the form field

**`Generated`**

from field: string placeholder = 15;

#### Defined in

[src/forms_fields.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L539)

___

### regex

• **regex**: `string` = `""`

The regex that is applicable on the form field

**`Generated`**

from field: string regex = 16;

#### Defined in

[src/forms_fields.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L546)

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form section that the form field belongs to

**`Generated`**

from field: uint64 section_id = 12;

#### Defined in

[src/forms_fields.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L525)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/forms_fields.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L497)

___

### width

• **width**: `string` = `""`

The width of the form field

**`Generated`**

from field: string width = 13;

#### Defined in

[src/forms_fields.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L532)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L590)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L588)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsFieldsServiceUpdateRequest"``

#### Defined in

[src/forms_fields.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L589)

## Methods

### clone

▸ **clone**(): [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md) \| `PlainMessage`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md) \| `PlainMessage`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md) \| `PlainMessage`\<[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L618)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L606)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L610)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceUpdateRequest`](FormsFieldsServiceUpdateRequest.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/9290b8b4ccbad2223d90fcb6be7d58b00b321b54/src/forms_fields.scailo_pb.ts#L614)
