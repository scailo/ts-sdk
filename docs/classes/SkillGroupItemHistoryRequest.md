[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillGroupItemHistoryRequest

# Class: SkillGroupItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.SkillGroupItemHistoryRequest

## Hierarchy

- `Message`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\>

  ↳ **`SkillGroupItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SkillGroupItemHistoryRequest.md#constructor)

### Properties

- [skillGroupId](SkillGroupItemHistoryRequest.md#skillgroupid)
- [skillParamId](SkillGroupItemHistoryRequest.md#skillparamid)
- [fields](SkillGroupItemHistoryRequest.md#fields)
- [runtime](SkillGroupItemHistoryRequest.md#runtime)
- [typeName](SkillGroupItemHistoryRequest.md#typename)

### Methods

- [clone](SkillGroupItemHistoryRequest.md#clone)
- [equals](SkillGroupItemHistoryRequest.md#equals)
- [fromBinary](SkillGroupItemHistoryRequest.md#frombinary)
- [fromJson](SkillGroupItemHistoryRequest.md#fromjson)
- [fromJsonString](SkillGroupItemHistoryRequest.md#fromjsonstring)
- [getType](SkillGroupItemHistoryRequest.md#gettype)
- [toBinary](SkillGroupItemHistoryRequest.md#tobinary)
- [toJSON](SkillGroupItemHistoryRequest.md#tojson)
- [toJson](SkillGroupItemHistoryRequest.md#tojson-1)
- [toJsonString](SkillGroupItemHistoryRequest.md#tojsonstring)
- [equals](SkillGroupItemHistoryRequest.md#equals-1)
- [fromBinary](SkillGroupItemHistoryRequest.md#frombinary-1)
- [fromJson](SkillGroupItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SkillGroupItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillGroupItemHistoryRequest**(`data?`): [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\> |

#### Returns

[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Overrides

Message\&lt;SkillGroupItemHistoryRequest\&gt;.constructor

#### Defined in

src/skills_groups.scailo_pb.ts:910

## Properties

### skillGroupId

• **skillGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the skill group

**`Generated`**

from field: uint64 skill_group_id = 10;

#### Defined in

src/skills_groups.scailo_pb.ts:901

___

### skillParamId

• **skillParamId**: `bigint` = `protoInt64.zero`

The ID of the skill param that is a part of the skill group

**`Generated`**

from field: uint64 skill_param_id = 11;

#### Defined in

src/skills_groups.scailo_pb.ts:908

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_groups.scailo_pb.ts:917

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_groups.scailo_pb.ts:915

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillGroupItemHistoryRequest"``

#### Defined in

src/skills_groups.scailo_pb.ts:916

## Methods

### clone

▸ **clone**(): [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md) \| `PlainMessage`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md) \| `PlainMessage`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md) \| `PlainMessage`\<[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_groups.scailo_pb.ts:934

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Defined in

src/skills_groups.scailo_pb.ts:922

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Defined in

src/skills_groups.scailo_pb.ts:926

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillGroupItemHistoryRequest`](SkillGroupItemHistoryRequest.md)

#### Defined in

src/skills_groups.scailo_pb.ts:930
