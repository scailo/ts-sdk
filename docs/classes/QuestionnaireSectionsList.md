[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsList

# Class: QuestionnaireSectionsList

Container message for a collection of Questionnaire Section records.

**`Generated`**

from message Scailo.QuestionnaireSectionsList

## Hierarchy

- `Message`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\>

  ↳ **`QuestionnaireSectionsList`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsList.md#constructor)

### Properties

- [list](QuestionnaireSectionsList.md#list)
- [fields](QuestionnaireSectionsList.md#fields)
- [runtime](QuestionnaireSectionsList.md#runtime)
- [typeName](QuestionnaireSectionsList.md#typename)

### Methods

- [clone](QuestionnaireSectionsList.md#clone)
- [equals](QuestionnaireSectionsList.md#equals)
- [fromBinary](QuestionnaireSectionsList.md#frombinary)
- [fromJson](QuestionnaireSectionsList.md#fromjson)
- [fromJsonString](QuestionnaireSectionsList.md#fromjsonstring)
- [getType](QuestionnaireSectionsList.md#gettype)
- [toBinary](QuestionnaireSectionsList.md#tobinary)
- [toJSON](QuestionnaireSectionsList.md#tojson)
- [toJson](QuestionnaireSectionsList.md#tojson-1)
- [toJsonString](QuestionnaireSectionsList.md#tojsonstring)
- [equals](QuestionnaireSectionsList.md#equals-1)
- [fromBinary](QuestionnaireSectionsList.md#frombinary-1)
- [fromJson](QuestionnaireSectionsList.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsList**(`data?`): [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\> |

#### Returns

[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Overrides

Message\&lt;QuestionnaireSectionsList\&gt;.constructor

#### Defined in

src/questionnaire_sections.scailo_pb.ts:643

## Properties

### list

• **list**: [`QuestionnaireSection`](QuestionnaireSection.md)[] = `[]`

**`Description`**

An array of Questionnaire Section records.

**`Generated`**

from field: repeated Scailo.QuestionnaireSection list = 1;

#### Defined in

src/questionnaire_sections.scailo_pb.ts:641

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:650

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:648

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsList"``

#### Defined in

src/questionnaire_sections.scailo_pb.ts:649

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md) \| `PlainMessage`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md) \| `PlainMessage`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md) \| `PlainMessage`\<[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_sections.scailo_pb.ts:666

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:654

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:658

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsList`](QuestionnaireSectionsList.md)

#### Defined in

src/questionnaire_sections.scailo_pb.ts:662
