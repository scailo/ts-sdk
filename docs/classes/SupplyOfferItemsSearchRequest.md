[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOfferItemsSearchRequest

# Class: SupplyOfferItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.SupplyOfferItemsSearchRequest

## Hierarchy

- `Message`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\>

  ↳ **`SupplyOfferItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SupplyOfferItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SupplyOfferItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SupplyOfferItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SupplyOfferItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SupplyOfferItemsSearchRequest.md#approverroleid)
- [count](SupplyOfferItemsSearchRequest.md#count)
- [deliveryDateEnd](SupplyOfferItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SupplyOfferItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SupplyOfferItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SupplyOfferItemsSearchRequest.md#entityuuid)
- [familyId](SupplyOfferItemsSearchRequest.md#familyid)
- [isActive](SupplyOfferItemsSearchRequest.md#isactive)
- [offset](SupplyOfferItemsSearchRequest.md#offset)
- [searchKey](SupplyOfferItemsSearchRequest.md#searchkey)
- [sortKey](SupplyOfferItemsSearchRequest.md#sortkey)
- [sortOrder](SupplyOfferItemsSearchRequest.md#sortorder)
- [status](SupplyOfferItemsSearchRequest.md#status)
- [supplyOfferId](SupplyOfferItemsSearchRequest.md#supplyofferid)
- [taxGroupId](SupplyOfferItemsSearchRequest.md#taxgroupid)
- [vendorId](SupplyOfferItemsSearchRequest.md#vendorid)
- [vendorUomId](SupplyOfferItemsSearchRequest.md#vendoruomid)
- [fields](SupplyOfferItemsSearchRequest.md#fields)
- [runtime](SupplyOfferItemsSearchRequest.md#runtime)
- [typeName](SupplyOfferItemsSearchRequest.md#typename)

### Methods

- [clone](SupplyOfferItemsSearchRequest.md#clone)
- [equals](SupplyOfferItemsSearchRequest.md#equals)
- [fromBinary](SupplyOfferItemsSearchRequest.md#frombinary)
- [fromJson](SupplyOfferItemsSearchRequest.md#fromjson)
- [fromJsonString](SupplyOfferItemsSearchRequest.md#fromjsonstring)
- [getType](SupplyOfferItemsSearchRequest.md#gettype)
- [toBinary](SupplyOfferItemsSearchRequest.md#tobinary)
- [toJSON](SupplyOfferItemsSearchRequest.md#tojson)
- [toJson](SupplyOfferItemsSearchRequest.md#tojson-1)
- [toJsonString](SupplyOfferItemsSearchRequest.md#tojsonstring)
- [equals](SupplyOfferItemsSearchRequest.md#equals-1)
- [fromBinary](SupplyOfferItemsSearchRequest.md#frombinary-1)
- [fromJson](SupplyOfferItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SupplyOfferItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOfferItemsSearchRequest**(`data?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Overrides

Message\&lt;SupplyOfferItemsSearchRequest\&gt;.constructor

#### Defined in

[src/supply_offers.scailo_pb.ts:3026](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3026)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/supply_offers.scailo_pb.ts:2950](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2950)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/supply_offers.scailo_pb.ts:2943](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2943)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/supply_offers.scailo_pb.ts:2936](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2936)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/supply_offers.scailo_pb.ts:2957](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2957)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/supply_offers.scailo_pb.ts:2868](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2868)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

[src/supply_offers.scailo_pb.ts:3006](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3006)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

[src/supply_offers.scailo_pb.ts:2992](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2992)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the supply offer

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

[src/supply_offers.scailo_pb.ts:2999](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2999)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/supply_offers.scailo_pb.ts:2922](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2922)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/supply_offers.scailo_pb.ts:2971](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2971)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/supply_offers.scailo_pb.ts:2852](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2852)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/supply_offers.scailo_pb.ts:2884](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2884)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/supply_offers.scailo_pb.ts:3013](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3013)

___

### sortKey

• **sortKey**: [`SUPPLY_OFFER_ITEM_SORT_KEY`](../enums/SUPPLY_OFFER_ITEM_SORT_KEY.md) = `SUPPLY_OFFER_ITEM_SORT_KEY.SUPPLY_OFFER_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SUPPLY_OFFER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/supply_offers.scailo_pb.ts:2906](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2906)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/supply_offers.scailo_pb.ts:2896](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2896)

___

### status

• **status**: [`SUPPLY_OFFER_ITEM_STATUS`](../enums/SUPPLY_OFFER_ITEM_STATUS.md) = `SUPPLY_OFFER_ITEM_STATUS.SUPPLY_OFFER_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SUPPLY_OFFER_ITEM_STATUS status = 7;

#### Defined in

[src/supply_offers.scailo_pb.ts:2929](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2929)

___

### supplyOfferId

• **supplyOfferId**: `bigint` = `protoInt64.zero`

The ID of the supply offer

**`Generated`**

from field: uint64 supply_offer_id = 20;

#### Defined in

[src/supply_offers.scailo_pb.ts:2964](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2964)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 23;

#### Defined in

[src/supply_offers.scailo_pb.ts:2985](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2985)

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

[src/supply_offers.scailo_pb.ts:3024](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3024)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 22;

#### Defined in

[src/supply_offers.scailo_pb.ts:2978](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L2978)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/supply_offers.scailo_pb.ts:3033](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3033)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/supply_offers.scailo_pb.ts:3031](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3031)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOfferItemsSearchRequest"``

#### Defined in

[src/supply_offers.scailo_pb.ts:3032](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3032)

## Methods

### clone

▸ **clone**(): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md) \| `PlainMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md) \| `PlainMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md) \| `PlainMessage`\<[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/supply_offers.scailo_pb.ts:3068](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3068)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:3056](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3056)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:3060](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3060)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemsSearchRequest`](SupplyOfferItemsSearchRequest.md)

#### Defined in

[src/supply_offers.scailo_pb.ts:3064](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/supply_offers.scailo_pb.ts#L3064)
