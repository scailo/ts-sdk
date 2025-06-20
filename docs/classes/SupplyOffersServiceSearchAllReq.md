[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersServiceSearchAllReq

# Class: SupplyOffersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SupplyOffersServiceSearchAllReq

## Hierarchy

- `Message`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\>

  ↳ **`SupplyOffersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SupplyOffersServiceSearchAllReq.md#constructor)

### Properties

- [buyerLocationId](SupplyOffersServiceSearchAllReq.md#buyerlocationid)
- [consigneeLocationId](SupplyOffersServiceSearchAllReq.md#consigneelocationid)
- [count](SupplyOffersServiceSearchAllReq.md#count)
- [currencyId](SupplyOffersServiceSearchAllReq.md#currencyid)
- [entityUuid](SupplyOffersServiceSearchAllReq.md#entityuuid)
- [isActive](SupplyOffersServiceSearchAllReq.md#isactive)
- [offset](SupplyOffersServiceSearchAllReq.md#offset)
- [projectId](SupplyOffersServiceSearchAllReq.md#projectid)
- [searchKey](SupplyOffersServiceSearchAllReq.md#searchkey)
- [sortKey](SupplyOffersServiceSearchAllReq.md#sortkey)
- [sortOrder](SupplyOffersServiceSearchAllReq.md#sortorder)
- [status](SupplyOffersServiceSearchAllReq.md#status)
- [vendorId](SupplyOffersServiceSearchAllReq.md#vendorid)
- [fields](SupplyOffersServiceSearchAllReq.md#fields)
- [runtime](SupplyOffersServiceSearchAllReq.md#runtime)
- [typeName](SupplyOffersServiceSearchAllReq.md#typename)

### Methods

- [clone](SupplyOffersServiceSearchAllReq.md#clone)
- [equals](SupplyOffersServiceSearchAllReq.md#equals)
- [fromBinary](SupplyOffersServiceSearchAllReq.md#frombinary)
- [fromJson](SupplyOffersServiceSearchAllReq.md#fromjson)
- [fromJsonString](SupplyOffersServiceSearchAllReq.md#fromjsonstring)
- [getType](SupplyOffersServiceSearchAllReq.md#gettype)
- [toBinary](SupplyOffersServiceSearchAllReq.md#tobinary)
- [toJSON](SupplyOffersServiceSearchAllReq.md#tojson)
- [toJson](SupplyOffersServiceSearchAllReq.md#tojson-1)
- [toJsonString](SupplyOffersServiceSearchAllReq.md#tojsonstring)
- [equals](SupplyOffersServiceSearchAllReq.md#equals-1)
- [fromBinary](SupplyOffersServiceSearchAllReq.md#frombinary-1)
- [fromJson](SupplyOffersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SupplyOffersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersServiceSearchAllReq**(`data?`): [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\> |

#### Returns

[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Overrides

Message\&lt;SupplyOffersServiceSearchAllReq\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:2345

## Properties

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The associated buyer location ID

**`Generated`**

from field: uint64 buyer_location_id = 23;

#### Defined in

src/supply_offers.scailo_pb.ts:2322

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The associated consignee location ID

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

src/supply_offers.scailo_pb.ts:2315

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/supply_offers.scailo_pb.ts:2266

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 25;

#### Defined in

src/supply_offers.scailo_pb.ts:2336

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/supply_offers.scailo_pb.ts:2294

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:2259

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/supply_offers.scailo_pb.ts:2273

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 26;

#### Defined in

src/supply_offers.scailo_pb.ts:2343

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/supply_offers.scailo_pb.ts:2308

___

### sortKey

• **sortKey**: [`SUPPLY_OFFER_SORT_KEY`](../enums/SUPPLY_OFFER_SORT_KEY.md) = `SUPPLY_OFFER_SORT_KEY.SUPPLY_OFFER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SUPPLY_OFFER_SORT_KEY sort_key = 5;

#### Defined in

src/supply_offers.scailo_pb.ts:2287

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/supply_offers.scailo_pb.ts:2280

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/supply_offers.scailo_pb.ts:2301

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

src/supply_offers.scailo_pb.ts:2329

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:2352

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:2350

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersServiceSearchAllReq"``

#### Defined in

src/supply_offers.scailo_pb.ts:2351

## Methods

### clone

▸ **clone**(): [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md) \| `PlainMessage`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md) \| `PlainMessage`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md) \| `PlainMessage`\<[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:2380

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2368

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2372

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersServiceSearchAllReq`](SupplyOffersServiceSearchAllReq.md)

#### Defined in

src/supply_offers.scailo_pb.ts:2376
