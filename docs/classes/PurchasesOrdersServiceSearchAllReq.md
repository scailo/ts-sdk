[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceSearchAllReq

# Class: PurchasesOrdersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.PurchasesOrdersServiceSearchAllReq

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\>

  ↳ **`PurchasesOrdersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceSearchAllReq.md#constructor)

### Properties

- [buyerLocationId](PurchasesOrdersServiceSearchAllReq.md#buyerlocationid)
- [consigneeLocationId](PurchasesOrdersServiceSearchAllReq.md#consigneelocationid)
- [count](PurchasesOrdersServiceSearchAllReq.md#count)
- [currencyId](PurchasesOrdersServiceSearchAllReq.md#currencyid)
- [entityUuid](PurchasesOrdersServiceSearchAllReq.md#entityuuid)
- [isActive](PurchasesOrdersServiceSearchAllReq.md#isactive)
- [offset](PurchasesOrdersServiceSearchAllReq.md#offset)
- [projectId](PurchasesOrdersServiceSearchAllReq.md#projectid)
- [searchKey](PurchasesOrdersServiceSearchAllReq.md#searchkey)
- [sortKey](PurchasesOrdersServiceSearchAllReq.md#sortkey)
- [sortOrder](PurchasesOrdersServiceSearchAllReq.md#sortorder)
- [status](PurchasesOrdersServiceSearchAllReq.md#status)
- [vendorId](PurchasesOrdersServiceSearchAllReq.md#vendorid)
- [fields](PurchasesOrdersServiceSearchAllReq.md#fields)
- [runtime](PurchasesOrdersServiceSearchAllReq.md#runtime)
- [typeName](PurchasesOrdersServiceSearchAllReq.md#typename)

### Methods

- [clone](PurchasesOrdersServiceSearchAllReq.md#clone)
- [equals](PurchasesOrdersServiceSearchAllReq.md#equals)
- [fromBinary](PurchasesOrdersServiceSearchAllReq.md#frombinary)
- [fromJson](PurchasesOrdersServiceSearchAllReq.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceSearchAllReq.md#fromjsonstring)
- [getType](PurchasesOrdersServiceSearchAllReq.md#gettype)
- [toBinary](PurchasesOrdersServiceSearchAllReq.md#tobinary)
- [toJSON](PurchasesOrdersServiceSearchAllReq.md#tojson)
- [toJson](PurchasesOrdersServiceSearchAllReq.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceSearchAllReq.md#tojsonstring)
- [equals](PurchasesOrdersServiceSearchAllReq.md#equals-1)
- [fromBinary](PurchasesOrdersServiceSearchAllReq.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceSearchAllReq**(`data?`): [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\> |

#### Returns

[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:2463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2463)

## Properties

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2440)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2433)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2384)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2454)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2412)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2377)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2391)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2461)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2426)

___

### sortKey

• **sortKey**: [`PURCHASE_ORDER_SORT_KEY`](../enums/PURCHASE_ORDER_SORT_KEY.md) = `PURCHASE_ORDER_SORT_KEY.PURCHASE_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2405)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2398)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2419)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_orders.scailo_pb.ts:2447](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2447)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2470](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2470)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2468](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2468)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceSearchAllReq"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:2469](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2469)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:2498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2498)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2486](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2486)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2490)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceSearchAllReq`](PurchasesOrdersServiceSearchAllReq.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:2494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L2494)
