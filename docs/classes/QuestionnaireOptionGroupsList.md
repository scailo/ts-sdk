[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsList

# Class: QuestionnaireOptionGroupsList

Container message for a collection of Questionnaire Option Group records.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsList

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\>

  ↳ **`QuestionnaireOptionGroupsList`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsList.md#constructor)

### Properties

- [list](QuestionnaireOptionGroupsList.md#list)
- [fields](QuestionnaireOptionGroupsList.md#fields)
- [runtime](QuestionnaireOptionGroupsList.md#runtime)
- [typeName](QuestionnaireOptionGroupsList.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsList.md#clone)
- [equals](QuestionnaireOptionGroupsList.md#equals)
- [fromBinary](QuestionnaireOptionGroupsList.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsList.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsList.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsList.md#gettype)
- [toBinary](QuestionnaireOptionGroupsList.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsList.md#tojson)
- [toJson](QuestionnaireOptionGroupsList.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsList.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsList.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsList.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsList.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsList**(`data?`): [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\> |

#### Returns

[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsList\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1025](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1025)

## Properties

### list

• **list**: [`QuestionnaireOptionGroup`](QuestionnaireOptionGroup.md)[] = `[]`

**`Description`**

An array of Questionnaire Option Group records.

**`Generated`**

from field: repeated Scailo.QuestionnaireOptionGroup list = 1;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1023](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1023)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1032](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1032)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1030)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsList"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1031)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1048)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1036)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1040)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsList`](QuestionnaireOptionGroupsList.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1044](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_option_groups.scailo_pb.ts#L1044)
