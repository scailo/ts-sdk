[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesList

# Class: QuestionnaireTemplatesList

Container message for a collection of Questionnaire Template records.

**`Generated`**

from message Scailo.QuestionnaireTemplatesList

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\>

  ↳ **`QuestionnaireTemplatesList`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesList.md#constructor)

### Properties

- [list](QuestionnaireTemplatesList.md#list)
- [fields](QuestionnaireTemplatesList.md#fields)
- [runtime](QuestionnaireTemplatesList.md#runtime)
- [typeName](QuestionnaireTemplatesList.md#typename)

### Methods

- [clone](QuestionnaireTemplatesList.md#clone)
- [equals](QuestionnaireTemplatesList.md#equals)
- [fromBinary](QuestionnaireTemplatesList.md#frombinary)
- [fromJson](QuestionnaireTemplatesList.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesList.md#fromjsonstring)
- [getType](QuestionnaireTemplatesList.md#gettype)
- [toBinary](QuestionnaireTemplatesList.md#tobinary)
- [toJSON](QuestionnaireTemplatesList.md#tojson)
- [toJson](QuestionnaireTemplatesList.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesList.md#tojsonstring)
- [equals](QuestionnaireTemplatesList.md#equals-1)
- [fromBinary](QuestionnaireTemplatesList.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesList.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesList**(`data?`): [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\> |

#### Returns

[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesList\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L651)

## Properties

### list

• **list**: [`QuestionnaireTemplate`](QuestionnaireTemplate.md)[] = `[]`

**`Description`**

An array of Questionnaire Template records.

**`Generated`**

from field: repeated Scailo.QuestionnaireTemplate list = 1;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L649)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L658)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L656)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesList"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L657)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md) \| `PlainMessage`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md) \| `PlainMessage`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md) \| `PlainMessage`\<[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:674](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L674)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L662)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L666)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesList`](QuestionnaireTemplatesList.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L670)
