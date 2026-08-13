[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupValueHistoryRequest

# Class: QuestionnaireOptionGroupValueHistoryRequest

Represents the request payload containing the parameter constraints required to
retrieve the historical audit trail and lifecycle changes of a specific questionnaire option group value record.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupValueHistoryRequest

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\>

  ↳ **`QuestionnaireOptionGroupValueHistoryRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupValueHistoryRequest.md#constructor)

### Properties

- [questionnaireOptionGroupId](QuestionnaireOptionGroupValueHistoryRequest.md#questionnaireoptiongroupid)
- [sortOrder](QuestionnaireOptionGroupValueHistoryRequest.md#sortorder)
- [fields](QuestionnaireOptionGroupValueHistoryRequest.md#fields)
- [runtime](QuestionnaireOptionGroupValueHistoryRequest.md#runtime)
- [typeName](QuestionnaireOptionGroupValueHistoryRequest.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupValueHistoryRequest.md#clone)
- [equals](QuestionnaireOptionGroupValueHistoryRequest.md#equals)
- [fromBinary](QuestionnaireOptionGroupValueHistoryRequest.md#frombinary)
- [fromJson](QuestionnaireOptionGroupValueHistoryRequest.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupValueHistoryRequest.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupValueHistoryRequest.md#gettype)
- [toBinary](QuestionnaireOptionGroupValueHistoryRequest.md#tobinary)
- [toJSON](QuestionnaireOptionGroupValueHistoryRequest.md#tojson)
- [toJson](QuestionnaireOptionGroupValueHistoryRequest.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupValueHistoryRequest.md#tojsonstring)
- [equals](QuestionnaireOptionGroupValueHistoryRequest.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupValueHistoryRequest.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupValueHistoryRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupValueHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupValueHistoryRequest**(`data?`): [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\> |

#### Returns

[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupValueHistoryRequest\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1135)

## Properties

### questionnaireOptionGroupId

• **questionnaireOptionGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent questionnaire option group to which this specific value belongs.

**`Example`**

```ts
105
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 questionnaire_option_group_id = 10;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1117)

___

### sortOrder

• **sortOrder**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.

**`Example`**

```ts
1
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sort_order = 12;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1133)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1142)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1140](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1140)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupValueHistoryRequest"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1141)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1159](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1159)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1147)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1151)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValueHistoryRequest`](QuestionnaireOptionGroupValueHistoryRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L1155)
