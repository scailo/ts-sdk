[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentItemHistoryRequest

# Class: ReplaceableIndentItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.ReplaceableIndentItemHistoryRequest

## Hierarchy

- `Message`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\>

  ↳ **`ReplaceableIndentItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentItemHistoryRequest.md#constructor)

### Properties

- [familyId](ReplaceableIndentItemHistoryRequest.md#familyid)
- [replaceableIndentId](ReplaceableIndentItemHistoryRequest.md#replaceableindentid)
- [fields](ReplaceableIndentItemHistoryRequest.md#fields)
- [runtime](ReplaceableIndentItemHistoryRequest.md#runtime)
- [typeName](ReplaceableIndentItemHistoryRequest.md#typename)

### Methods

- [clone](ReplaceableIndentItemHistoryRequest.md#clone)
- [equals](ReplaceableIndentItemHistoryRequest.md#equals)
- [fromBinary](ReplaceableIndentItemHistoryRequest.md#frombinary)
- [fromJson](ReplaceableIndentItemHistoryRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentItemHistoryRequest.md#fromjsonstring)
- [getType](ReplaceableIndentItemHistoryRequest.md#gettype)
- [toBinary](ReplaceableIndentItemHistoryRequest.md#tobinary)
- [toJSON](ReplaceableIndentItemHistoryRequest.md#tojson)
- [toJson](ReplaceableIndentItemHistoryRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentItemHistoryRequest.md#tojsonstring)
- [equals](ReplaceableIndentItemHistoryRequest.md#equals-1)
- [fromBinary](ReplaceableIndentItemHistoryRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentItemHistoryRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentItemHistoryRequest**(`data?`): [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\> |

#### Returns

[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Overrides

Message\&lt;ReplaceableIndentItemHistoryRequest\&gt;.constructor

#### Defined in

src/replaceable_indents.scailo_pb.ts:971

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/replaceable_indents.scailo_pb.ts:969

___

### replaceableIndentId

• **replaceableIndentId**: `bigint` = `protoInt64.zero`

Stores the replaceable indent ID

**`Generated`**

from field: uint64 replaceable_indent_id = 10;

#### Defined in

src/replaceable_indents.scailo_pb.ts:962

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/replaceable_indents.scailo_pb.ts:978

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/replaceable_indents.scailo_pb.ts:976

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentItemHistoryRequest"``

#### Defined in

src/replaceable_indents.scailo_pb.ts:977

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md) \| `PlainMessage`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md) \| `PlainMessage`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md) \| `PlainMessage`\<[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/replaceable_indents.scailo_pb.ts:995

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:983

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:987

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentItemHistoryRequest`](ReplaceableIndentItemHistoryRequest.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:991
