[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceCountReq

# Class: ProductsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ProductsServiceCountReq

## Hierarchy

- `Message`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\>

  ↳ **`ProductsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ProductsServiceCountReq.md#constructor)

### Properties

- [code](ProductsServiceCountReq.md#code)
- [creationTimestampEnd](ProductsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ProductsServiceCountReq.md#creationtimestampstart)
- [discardedAtEnd](ProductsServiceCountReq.md#discardedatend)
- [discardedAtStart](ProductsServiceCountReq.md#discardedatstart)
- [entityUuid](ProductsServiceCountReq.md#entityuuid)
- [familyId](ProductsServiceCountReq.md#familyid)
- [formData](ProductsServiceCountReq.md#formdata)
- [hash](ProductsServiceCountReq.md#hash)
- [internalItemCode](ProductsServiceCountReq.md#internalitemcode)
- [isActive](ProductsServiceCountReq.md#isactive)
- [isQcReportPublic](ProductsServiceCountReq.md#isqcreportpublic)
- [locationId](ProductsServiceCountReq.md#locationid)
- [modificationTimestampEnd](ProductsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ProductsServiceCountReq.md#modificationtimestampstart)
- [parentRefId](ProductsServiceCountReq.md#parentrefid)
- [quantityRemainingMax](ProductsServiceCountReq.md#quantityremainingmax)
- [quantityRemainingMin](ProductsServiceCountReq.md#quantityremainingmin)
- [refFrom](ProductsServiceCountReq.md#reffrom)
- [refId](ProductsServiceCountReq.md#refid)
- [secondaryUomId](ProductsServiceCountReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](ProductsServiceCountReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](ProductsServiceCountReq.md#shelflifetimestampstart)
- [status](ProductsServiceCountReq.md#status)
- [storageId](ProductsServiceCountReq.md#storageid)
- [storeId](ProductsServiceCountReq.md#storeid)
- [storeIntakeAtEnd](ProductsServiceCountReq.md#storeintakeatend)
- [storeIntakeAtStart](ProductsServiceCountReq.md#storeintakeatstart)
- [warrantyTimestampEnd](ProductsServiceCountReq.md#warrantytimestampend)
- [warrantyTimestampStart](ProductsServiceCountReq.md#warrantytimestampstart)
- [fields](ProductsServiceCountReq.md#fields)
- [runtime](ProductsServiceCountReq.md#runtime)
- [typeName](ProductsServiceCountReq.md#typename)

### Methods

- [clone](ProductsServiceCountReq.md#clone)
- [equals](ProductsServiceCountReq.md#equals)
- [fromBinary](ProductsServiceCountReq.md#frombinary)
- [fromJson](ProductsServiceCountReq.md#fromjson)
- [fromJsonString](ProductsServiceCountReq.md#fromjsonstring)
- [getType](ProductsServiceCountReq.md#gettype)
- [toBinary](ProductsServiceCountReq.md#tobinary)
- [toJSON](ProductsServiceCountReq.md#tojson)
- [toJson](ProductsServiceCountReq.md#tojson-1)
- [toJsonString](ProductsServiceCountReq.md#tojsonstring)
- [equals](ProductsServiceCountReq.md#equals-1)
- [fromBinary](ProductsServiceCountReq.md#frombinary-1)
- [fromJson](ProductsServiceCountReq.md#fromjson-1)
- [fromJsonString](ProductsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceCountReq**(`data?`): [`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\> |

#### Returns

[`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Overrides

Message\&lt;ProductsServiceCountReq\&gt;.constructor

#### Defined in

[src/products.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1639)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the product

**`Generated`**

from field: string code = 34;

#### Defined in

[src/products.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1539)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/products.scailo_pb.ts:1421](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1421)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/products.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1405)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/products.scailo_pb.ts:1504](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1504)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/products.scailo_pb.ts:1497](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1497)

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

from field: string entity_uuid = 8;

#### Defined in

[src/products.scailo_pb.ts:1469](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1469)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/products.scailo_pb.ts:1532](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1532)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/products.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1637)

___

### hash

• **hash**: `string` = `""`

The computed hash of the product

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/products.scailo_pb.ts:1553](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1553)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Filter by the exact internal code

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/products.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1546)

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

[src/products.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1389)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/products.scailo_pb.ts:1623](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1623)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/products.scailo_pb.ts:1630](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1630)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/products.scailo_pb.ts:1453](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1453)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/products.scailo_pb.ts:1437](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1437)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/products.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1511)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/products.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1567)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/products.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1560)

___

### refFrom

• **refFrom**: [`PRODUCT_REF_FROM`](../enums/PRODUCT_REF_FROM.md) = `PRODUCT_REF_FROM.PRODUCT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.PRODUCT_REF_FROM ref_from = 31;

#### Defined in

[src/products.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1518)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/products.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1525)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of product

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/products.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1574)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/products.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1588)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/products.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1581)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this product

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/products.scailo_pb.ts:1476](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1476)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the product is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/products.scailo_pb.ts:1616](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1616)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the product is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/products.scailo_pb.ts:1609](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1609)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/products.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1490)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/products.scailo_pb.ts:1483](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1483)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/products.scailo_pb.ts:1602](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1602)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/products.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1595)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/products.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1646)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/products.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1644)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductsServiceCountReq"``

#### Defined in

[src/products.scailo_pb.ts:1645](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1645)

## Methods

### clone

▸ **clone**(): [`ProductsServiceCountReq`](ProductsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ProductsServiceCountReq`](ProductsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductsServiceCountReq`](ProductsServiceCountReq.md) \| `PlainMessage`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ProductsServiceCountReq`](ProductsServiceCountReq.md) \| `PlainMessage`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ProductsServiceCountReq`](ProductsServiceCountReq.md) \| `PlainMessage`\<[`ProductsServiceCountReq`](ProductsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/products.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1691)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Defined in

[src/products.scailo_pb.ts:1679](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1679)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Defined in

[src/products.scailo_pb.ts:1683](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1683)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCountReq`](ProductsServiceCountReq.md)

#### Defined in

[src/products.scailo_pb.ts:1687](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/products.scailo_pb.ts#L1687)
