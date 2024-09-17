[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse

# Class: OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#count)
- [offset](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#offset)
- [payload](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#payload)
- [total](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#total)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1221

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1198

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1205

___

### payload

• **payload**: [`OutwardJobFreeIssueMaterialReturnItem`](OutwardJobFreeIssueMaterialReturnItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem payload = 4;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1219

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1212

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1228

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1226

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1227

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1247

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1235

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1239

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1243
