[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse

# Class: OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#count)
- [offset](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#offset)
- [payload](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#payload)
- [total](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#total)
- [fields](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse**(`data?`): [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1396

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1373

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1380

___

### payload

• **payload**: [`OutwardJobFreeIssueMaterialItem`](OutwardJobFreeIssueMaterialItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterialItem payload = 4;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1394

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1387

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1403

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1401

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1402

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1422

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1410

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1414

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse`](OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1418
