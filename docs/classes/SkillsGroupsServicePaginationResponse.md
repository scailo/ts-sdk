[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServicePaginationResponse

# Class: SkillsGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.SkillsGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\>

  ↳ **`SkillsGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](SkillsGroupsServicePaginationResponse.md#count)
- [offset](SkillsGroupsServicePaginationResponse.md#offset)
- [payload](SkillsGroupsServicePaginationResponse.md#payload)
- [total](SkillsGroupsServicePaginationResponse.md#total)
- [fields](SkillsGroupsServicePaginationResponse.md#fields)
- [runtime](SkillsGroupsServicePaginationResponse.md#runtime)
- [typeName](SkillsGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](SkillsGroupsServicePaginationResponse.md#clone)
- [equals](SkillsGroupsServicePaginationResponse.md#equals)
- [fromBinary](SkillsGroupsServicePaginationResponse.md#frombinary)
- [fromJson](SkillsGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](SkillsGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](SkillsGroupsServicePaginationResponse.md#gettype)
- [toBinary](SkillsGroupsServicePaginationResponse.md#tobinary)
- [toJSON](SkillsGroupsServicePaginationResponse.md#tojson)
- [toJson](SkillsGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](SkillsGroupsServicePaginationResponse.md#tojsonstring)
- [equals](SkillsGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](SkillsGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](SkillsGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SkillsGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServicePaginationResponse**(`data?`): [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\> |

#### Returns

[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;SkillsGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

src/skills_groups.scailo_pb.ts:1048

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/skills_groups.scailo_pb.ts:1025

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/skills_groups.scailo_pb.ts:1032

___

### payload

• **payload**: [`SkillGroup`](SkillGroup.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.SkillGroup payload = 4;

#### Defined in

src/skills_groups.scailo_pb.ts:1046

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/skills_groups.scailo_pb.ts:1039

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_groups.scailo_pb.ts:1055

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_groups.scailo_pb.ts:1053

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServicePaginationResponse"``

#### Defined in

src/skills_groups.scailo_pb.ts:1054

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_groups.scailo_pb.ts:1074

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Defined in

src/skills_groups.scailo_pb.ts:1062

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Defined in

src/skills_groups.scailo_pb.ts:1066

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServicePaginationResponse`](SkillsGroupsServicePaginationResponse.md)

#### Defined in

src/skills_groups.scailo_pb.ts:1070
