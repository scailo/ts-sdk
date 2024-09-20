[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceSearchAllReq

# Class: PurchasesReturnsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.PurchasesReturnsServiceSearchAllReq

## Hierarchy

- `Message`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\>

  ↳ **`PurchasesReturnsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](PurchasesReturnsServiceSearchAllReq.md#billingstatus)
- [count](PurchasesReturnsServiceSearchAllReq.md#count)
- [entityUuid](PurchasesReturnsServiceSearchAllReq.md#entityuuid)
- [isActive](PurchasesReturnsServiceSearchAllReq.md#isactive)
- [offset](PurchasesReturnsServiceSearchAllReq.md#offset)
- [refFrom](PurchasesReturnsServiceSearchAllReq.md#reffrom)
- [refId](PurchasesReturnsServiceSearchAllReq.md#refid)
- [searchKey](PurchasesReturnsServiceSearchAllReq.md#searchkey)
- [sortKey](PurchasesReturnsServiceSearchAllReq.md#sortkey)
- [sortOrder](PurchasesReturnsServiceSearchAllReq.md#sortorder)
- [status](PurchasesReturnsServiceSearchAllReq.md#status)
- [vendorId](PurchasesReturnsServiceSearchAllReq.md#vendorid)
- [fields](PurchasesReturnsServiceSearchAllReq.md#fields)
- [runtime](PurchasesReturnsServiceSearchAllReq.md#runtime)
- [typeName](PurchasesReturnsServiceSearchAllReq.md#typename)

### Methods

- [clone](PurchasesReturnsServiceSearchAllReq.md#clone)
- [equals](PurchasesReturnsServiceSearchAllReq.md#equals)
- [fromBinary](PurchasesReturnsServiceSearchAllReq.md#frombinary)
- [fromJson](PurchasesReturnsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceSearchAllReq.md#fromjsonstring)
- [getType](PurchasesReturnsServiceSearchAllReq.md#gettype)
- [toBinary](PurchasesReturnsServiceSearchAllReq.md#tobinary)
- [toJSON](PurchasesReturnsServiceSearchAllReq.md#tojson)
- [toJson](PurchasesReturnsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceSearchAllReq.md#tojsonstring)
- [equals](PurchasesReturnsServiceSearchAllReq.md#equals-1)
- [fromBinary](PurchasesReturnsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceSearchAllReq**(`data?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Overrides

Message\&lt;PurchasesReturnsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/purchases_returns.scailo_pb.ts:2086

## Properties

### billingStatus

• **billingStatus**: [`PURCHASE_RETURN_BILLING_STATUS`](../enums/PURCHASE_RETURN_BILLING_STATUS.md) = `PURCHASE_RETURN_BILLING_STATUS.PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the purchase return bill

**`Generated`**

from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

src/purchases_returns.scailo_pb.ts:2077

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_returns.scailo_pb.ts:2014

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/purchases_returns.scailo_pb.ts:2042

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_returns.scailo_pb.ts:2007

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_returns.scailo_pb.ts:2021

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/purchases_returns.scailo_pb.ts:2063

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/purchases_returns.scailo_pb.ts:2070

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/purchases_returns.scailo_pb.ts:2056

___

### sortKey

• **sortKey**: [`PURCHASE_RETURN_SORT_KEY`](../enums/PURCHASE_RETURN_SORT_KEY.md) = `PURCHASE_RETURN_SORT_KEY.PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_RETURN_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_returns.scailo_pb.ts:2035

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_returns.scailo_pb.ts:2028

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_returns.scailo_pb.ts:2049

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

src/purchases_returns.scailo_pb.ts:2084

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_returns.scailo_pb.ts:2093

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_returns.scailo_pb.ts:2091

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServiceSearchAllReq"``

#### Defined in

src/purchases_returns.scailo_pb.ts:2092

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_returns.scailo_pb.ts:2120

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:2108

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:2112

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Defined in

src/purchases_returns.scailo_pb.ts:2116
