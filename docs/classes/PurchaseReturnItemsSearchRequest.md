[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseReturnItemsSearchRequest

# Class: PurchaseReturnItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.PurchaseReturnItemsSearchRequest

## Hierarchy

- `Message`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\>

  ↳ **`PurchaseReturnItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseReturnItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](PurchaseReturnItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](PurchaseReturnItemsSearchRequest.md#approvedonend)
- [approvedOnStart](PurchaseReturnItemsSearchRequest.md#approvedonstart)
- [approverRoleId](PurchaseReturnItemsSearchRequest.md#approverroleid)
- [count](PurchaseReturnItemsSearchRequest.md#count)
- [entityUuid](PurchaseReturnItemsSearchRequest.md#entityuuid)
- [familyId](PurchaseReturnItemsSearchRequest.md#familyid)
- [isActive](PurchaseReturnItemsSearchRequest.md#isactive)
- [itemHash](PurchaseReturnItemsSearchRequest.md#itemhash)
- [offset](PurchaseReturnItemsSearchRequest.md#offset)
- [purchaseReturnId](PurchaseReturnItemsSearchRequest.md#purchasereturnid)
- [searchKey](PurchaseReturnItemsSearchRequest.md#searchkey)
- [sortKey](PurchaseReturnItemsSearchRequest.md#sortkey)
- [sortOrder](PurchaseReturnItemsSearchRequest.md#sortorder)
- [status](PurchaseReturnItemsSearchRequest.md#status)
- [vendorUomId](PurchaseReturnItemsSearchRequest.md#vendoruomid)
- [fields](PurchaseReturnItemsSearchRequest.md#fields)
- [runtime](PurchaseReturnItemsSearchRequest.md#runtime)
- [typeName](PurchaseReturnItemsSearchRequest.md#typename)

### Methods

- [clone](PurchaseReturnItemsSearchRequest.md#clone)
- [equals](PurchaseReturnItemsSearchRequest.md#equals)
- [fromBinary](PurchaseReturnItemsSearchRequest.md#frombinary)
- [fromJson](PurchaseReturnItemsSearchRequest.md#fromjson)
- [fromJsonString](PurchaseReturnItemsSearchRequest.md#fromjsonstring)
- [getType](PurchaseReturnItemsSearchRequest.md#gettype)
- [toBinary](PurchaseReturnItemsSearchRequest.md#tobinary)
- [toJSON](PurchaseReturnItemsSearchRequest.md#tojson)
- [toJson](PurchaseReturnItemsSearchRequest.md#tojson-1)
- [toJsonString](PurchaseReturnItemsSearchRequest.md#tojsonstring)
- [equals](PurchaseReturnItemsSearchRequest.md#equals-1)
- [fromBinary](PurchaseReturnItemsSearchRequest.md#frombinary-1)
- [fromJson](PurchaseReturnItemsSearchRequest.md#fromjson-1)
- [fromJsonString](PurchaseReturnItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseReturnItemsSearchRequest**(`data?`): [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\> |

#### Returns

[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Overrides

Message\&lt;PurchaseReturnItemsSearchRequest\&gt;.constructor

#### Defined in

[src/purchases_returns.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1370)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1326)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1319)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1312](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1312)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1333)

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

[src/purchases_returns.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1244)

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

[src/purchases_returns.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1298)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1347)

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

[src/purchases_returns.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1228)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 23;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1354)

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

[src/purchases_returns.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1260)

___

### purchaseReturnId

• **purchaseReturnId**: `bigint` = `protoInt64.zero`

The ID of the purchase return

**`Generated`**

from field: uint64 purchase_return_id = 20;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1340)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1368)

___

### sortKey

• **sortKey**: [`PURCHASE_RETURN_ITEM_SORT_KEY`](../enums/PURCHASE_RETURN_ITEM_SORT_KEY.md) = `PURCHASE_RETURN_ITEM_SORT_KEY.PURCHASE_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_RETURN_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1282](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1282)

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

[src/purchases_returns.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1272)

___

### status

• **status**: [`PURCHASE_RETURN_ITEM_STATUS`](../enums/PURCHASE_RETURN_ITEM_STATUS.md) = `PURCHASE_RETURN_ITEM_STATUS.PURCHASE_RETURN_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PURCHASE_RETURN_ITEM_STATUS status = 7;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1305)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 24;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1361)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1377)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1375)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseReturnItemsSearchRequest"``

#### Defined in

[src/purchases_returns.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1376)

## Methods

### clone

▸ **clone**(): [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns.scailo_pb.ts:1408](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1408)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:1396](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1396)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:1400](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1400)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturnItemsSearchRequest`](PurchaseReturnItemsSearchRequest.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:1404](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L1404)
