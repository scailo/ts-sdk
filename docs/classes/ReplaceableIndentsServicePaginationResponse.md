[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServicePaginationResponse

# Class: ReplaceableIndentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ReplaceableIndentsServicePaginationResponse

## Hierarchy

- `Message`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\>

  ↳ **`ReplaceableIndentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServicePaginationResponse.md#constructor)

### Properties

- [count](ReplaceableIndentsServicePaginationResponse.md#count)
- [offset](ReplaceableIndentsServicePaginationResponse.md#offset)
- [payload](ReplaceableIndentsServicePaginationResponse.md#payload)
- [total](ReplaceableIndentsServicePaginationResponse.md#total)
- [fields](ReplaceableIndentsServicePaginationResponse.md#fields)
- [runtime](ReplaceableIndentsServicePaginationResponse.md#runtime)
- [typeName](ReplaceableIndentsServicePaginationResponse.md#typename)

### Methods

- [clone](ReplaceableIndentsServicePaginationResponse.md#clone)
- [equals](ReplaceableIndentsServicePaginationResponse.md#equals)
- [fromBinary](ReplaceableIndentsServicePaginationResponse.md#frombinary)
- [fromJson](ReplaceableIndentsServicePaginationResponse.md#fromjson)
- [fromJsonString](ReplaceableIndentsServicePaginationResponse.md#fromjsonstring)
- [getType](ReplaceableIndentsServicePaginationResponse.md#gettype)
- [toBinary](ReplaceableIndentsServicePaginationResponse.md#tobinary)
- [toJSON](ReplaceableIndentsServicePaginationResponse.md#tojson)
- [toJson](ReplaceableIndentsServicePaginationResponse.md#tojson-1)
- [toJsonString](ReplaceableIndentsServicePaginationResponse.md#tojsonstring)
- [equals](ReplaceableIndentsServicePaginationResponse.md#equals-1)
- [fromBinary](ReplaceableIndentsServicePaginationResponse.md#frombinary-1)
- [fromJson](ReplaceableIndentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServicePaginationResponse**(`data?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Overrides

Message\&lt;ReplaceableIndentsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1283](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1283)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1253)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1263)

___

### payload

• **payload**: [`ReplaceableIndent`](ReplaceableIndent.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.ReplaceableIndent payload = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1281)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1273)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1290)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1288)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServicePaginationResponse"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1289)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1309)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1297)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1301](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1301)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationResponse`](ReplaceableIndentsServicePaginationResponse.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1305)
