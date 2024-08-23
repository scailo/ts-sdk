[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq

# Class: OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#constructor)

### Properties

- [count](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#count)
- [isActive](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#isactive)
- [offset](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#offset)
- [sortKey](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#sortkey)
- [sortOrder](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#sortorder)
- [status](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#status)
- [fields](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq**(`data?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1359

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1329

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1322

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1336

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY`](../enums/OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.md) = `OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1350

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1343

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this outward job free issue material return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1357

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1366

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1364

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq"``

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1365

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1387

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1375

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1379

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq`](OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq.md)

#### Defined in

src/outward_jobs_free_issue_materials_returns.scailo_pb.ts:1383
