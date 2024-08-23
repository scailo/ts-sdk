[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceSearchAllReq

# Class: ProductsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ProductsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\>

  ↳ **`ProductsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProductsServiceSearchAllReq.md#constructor)

### Properties

- [count](ProductsServiceSearchAllReq.md#count)
- [entityUuid](ProductsServiceSearchAllReq.md#entityuuid)
- [familyId](ProductsServiceSearchAllReq.md#familyid)
- [isActive](ProductsServiceSearchAllReq.md#isactive)
- [isQcReportPublic](ProductsServiceSearchAllReq.md#isqcreportpublic)
- [offset](ProductsServiceSearchAllReq.md#offset)
- [parentRefId](ProductsServiceSearchAllReq.md#parentrefid)
- [refFrom](ProductsServiceSearchAllReq.md#reffrom)
- [refId](ProductsServiceSearchAllReq.md#refid)
- [searchKey](ProductsServiceSearchAllReq.md#searchkey)
- [secondaryUomId](ProductsServiceSearchAllReq.md#secondaryuomid)
- [sortKey](ProductsServiceSearchAllReq.md#sortkey)
- [sortOrder](ProductsServiceSearchAllReq.md#sortorder)
- [status](ProductsServiceSearchAllReq.md#status)
- [storageId](ProductsServiceSearchAllReq.md#storageid)
- [storeId](ProductsServiceSearchAllReq.md#storeid)
- [fields](ProductsServiceSearchAllReq.md#fields)
- [runtime](ProductsServiceSearchAllReq.md#runtime)
- [typeName](ProductsServiceSearchAllReq.md#typename)

### Methods

- [clone](ProductsServiceSearchAllReq.md#clone)
- [equals](ProductsServiceSearchAllReq.md#equals)
- [fromBinary](ProductsServiceSearchAllReq.md#frombinary)
- [fromJson](ProductsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProductsServiceSearchAllReq.md#fromjsonstring)
- [getType](ProductsServiceSearchAllReq.md#gettype)
- [toBinary](ProductsServiceSearchAllReq.md#tobinary)
- [toJSON](ProductsServiceSearchAllReq.md#tojson)
- [toJson](ProductsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProductsServiceSearchAllReq.md#tojsonstring)
- [equals](ProductsServiceSearchAllReq.md#equals-1)
- [fromBinary](ProductsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProductsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProductsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceSearchAllReq**(`data?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ProductsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/products.scailo_pb.ts:1590

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/products.scailo_pb.ts:1490

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/products.scailo_pb.ts:1518

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/products.scailo_pb.ts:1560

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/products.scailo_pb.ts:1483

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

src/products.scailo_pb.ts:1588

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/products.scailo_pb.ts:1497

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

src/products.scailo_pb.ts:1539

___

### refFrom

• **refFrom**: [`PRODUCT_REF_FROM`](../enums/PRODUCT_REF_FROM.md) = `PRODUCT_REF_FROM.PRODUCT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.PRODUCT_REF_FROM ref_from = 31;

#### Defined in

src/products.scailo_pb.ts:1546

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/products.scailo_pb.ts:1553

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/products.scailo_pb.ts:1532

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of product

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

src/products.scailo_pb.ts:1567

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

src/products.scailo_pb.ts:1511

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/products.scailo_pb.ts:1504

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

src/products.scailo_pb.ts:1525

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the product is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/products.scailo_pb.ts:1581

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the product is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

src/products.scailo_pb.ts:1574

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/products.scailo_pb.ts:1597

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/products.scailo_pb.ts:1595

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductsServiceSearchAllReq"``

#### Defined in

src/products.scailo_pb.ts:1596

## Methods

### clone

▸ **clone**(): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md) \| `PlainMessage`\<[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/products.scailo_pb.ts:1628

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Defined in

src/products.scailo_pb.ts:1616

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Defined in

src/products.scailo_pb.ts:1620

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceSearchAllReq`](ProductsServiceSearchAllReq.md)

#### Defined in

src/products.scailo_pb.ts:1624
