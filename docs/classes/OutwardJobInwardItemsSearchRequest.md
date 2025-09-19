[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobInwardItemsSearchRequest

# Class: OutwardJobInwardItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.OutwardJobInwardItemsSearchRequest

## Hierarchy

- `Message`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\>

  ↳ **`OutwardJobInwardItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobInwardItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](OutwardJobInwardItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](OutwardJobInwardItemsSearchRequest.md#approvedonend)
- [approvedOnStart](OutwardJobInwardItemsSearchRequest.md#approvedonstart)
- [approverRoleId](OutwardJobInwardItemsSearchRequest.md#approverroleid)
- [count](OutwardJobInwardItemsSearchRequest.md#count)
- [deliveryDateEnd](OutwardJobInwardItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](OutwardJobInwardItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](OutwardJobInwardItemsSearchRequest.md#deliverydatestart)
- [entityUuid](OutwardJobInwardItemsSearchRequest.md#entityuuid)
- [familyId](OutwardJobInwardItemsSearchRequest.md#familyid)
- [isActive](OutwardJobInwardItemsSearchRequest.md#isactive)
- [offset](OutwardJobInwardItemsSearchRequest.md#offset)
- [outwardJobId](OutwardJobInwardItemsSearchRequest.md#outwardjobid)
- [searchKey](OutwardJobInwardItemsSearchRequest.md#searchkey)
- [sortKey](OutwardJobInwardItemsSearchRequest.md#sortkey)
- [sortOrder](OutwardJobInwardItemsSearchRequest.md#sortorder)
- [status](OutwardJobInwardItemsSearchRequest.md#status)
- [vendorId](OutwardJobInwardItemsSearchRequest.md#vendorid)
- [fields](OutwardJobInwardItemsSearchRequest.md#fields)
- [runtime](OutwardJobInwardItemsSearchRequest.md#runtime)
- [typeName](OutwardJobInwardItemsSearchRequest.md#typename)

### Methods

- [clone](OutwardJobInwardItemsSearchRequest.md#clone)
- [equals](OutwardJobInwardItemsSearchRequest.md#equals)
- [fromBinary](OutwardJobInwardItemsSearchRequest.md#frombinary)
- [fromJson](OutwardJobInwardItemsSearchRequest.md#fromjson)
- [fromJsonString](OutwardJobInwardItemsSearchRequest.md#fromjsonstring)
- [getType](OutwardJobInwardItemsSearchRequest.md#gettype)
- [toBinary](OutwardJobInwardItemsSearchRequest.md#tobinary)
- [toJSON](OutwardJobInwardItemsSearchRequest.md#tojson)
- [toJson](OutwardJobInwardItemsSearchRequest.md#tojson-1)
- [toJsonString](OutwardJobInwardItemsSearchRequest.md#tojsonstring)
- [equals](OutwardJobInwardItemsSearchRequest.md#equals-1)
- [fromBinary](OutwardJobInwardItemsSearchRequest.md#frombinary-1)
- [fromJson](OutwardJobInwardItemsSearchRequest.md#fromjson-1)
- [fromJsonString](OutwardJobInwardItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobInwardItemsSearchRequest**(`data?`): [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\> |

#### Returns

[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Overrides

Message\&lt;OutwardJobInwardItemsSearchRequest\&gt;.constructor

#### Defined in

[src/outward_jobs.scailo_pb.ts:2260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2260)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2198](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2198)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2191](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2191)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2184](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2184)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2205](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2205)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2142](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2142)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2240](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2240)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2226](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2226)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase order

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2233](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2233)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2170](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2170)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2219](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2219)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2135)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2149](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2149)

___

### outwardJobId

• **outwardJobId**: `bigint` = `protoInt64.zero`

The ID of the outward job

**`Generated`**

from field: uint64 outward_job_id = 20;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2212](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2212)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2247](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2247)

___

### sortKey

• **sortKey**: [`OUTWARD_JOB_INWARD_ITEM_SORT_KEY`](../enums/OUTWARD_JOB_INWARD_ITEM_SORT_KEY.md) = `OUTWARD_JOB_INWARD_ITEM_SORT_KEY.OUTWARD_JOB_INWARD_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.OUTWARD_JOB_INWARD_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2163)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2156](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2156)

___

### status

• **status**: [`OUTWARD_JOB_INWARD_ITEM_STATUS`](../enums/OUTWARD_JOB_INWARD_ITEM_STATUS.md) = `OUTWARD_JOB_INWARD_ITEM_STATUS.OUTWARD_JOB_INWARD_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.OUTWARD_JOB_INWARD_ITEM_STATUS status = 7;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2177)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------
Extra filters
The ID of the associated vendor

------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 200;

#### Defined in

[src/outward_jobs.scailo_pb.ts:2258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2258)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2267)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2265)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobInwardItemsSearchRequest"``

#### Defined in

[src/outward_jobs.scailo_pb.ts:2266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2266)

## Methods

### clone

▸ **clone**(): [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md) \| `PlainMessage`\<[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/outward_jobs.scailo_pb.ts:2300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2300)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2288](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2288)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2292](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2292)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobInwardItemsSearchRequest`](OutwardJobInwardItemsSearchRequest.md)

#### Defined in

[src/outward_jobs.scailo_pb.ts:2296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/outward_jobs.scailo_pb.ts#L2296)
