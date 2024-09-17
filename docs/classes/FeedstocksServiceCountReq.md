[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FeedstocksServiceCountReq

# Class: FeedstocksServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.FeedstocksServiceCountReq

## Hierarchy

- `Message`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\>

  ↳ **`FeedstocksServiceCountReq`**

## Table of contents

### Constructors

- [constructor](FeedstocksServiceCountReq.md#constructor)

### Properties

- [code](FeedstocksServiceCountReq.md#code)
- [creationTimestampEnd](FeedstocksServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](FeedstocksServiceCountReq.md#creationtimestampstart)
- [discardedAtEnd](FeedstocksServiceCountReq.md#discardedatend)
- [discardedAtStart](FeedstocksServiceCountReq.md#discardedatstart)
- [entityUuid](FeedstocksServiceCountReq.md#entityuuid)
- [familyId](FeedstocksServiceCountReq.md#familyid)
- [hash](FeedstocksServiceCountReq.md#hash)
- [internalItemCode](FeedstocksServiceCountReq.md#internalitemcode)
- [isActive](FeedstocksServiceCountReq.md#isactive)
- [isQcReportPublic](FeedstocksServiceCountReq.md#isqcreportpublic)
- [locationId](FeedstocksServiceCountReq.md#locationid)
- [modificationTimestampEnd](FeedstocksServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](FeedstocksServiceCountReq.md#modificationtimestampstart)
- [parentRefId](FeedstocksServiceCountReq.md#parentrefid)
- [quantityRemainingMax](FeedstocksServiceCountReq.md#quantityremainingmax)
- [quantityRemainingMin](FeedstocksServiceCountReq.md#quantityremainingmin)
- [refFrom](FeedstocksServiceCountReq.md#reffrom)
- [refId](FeedstocksServiceCountReq.md#refid)
- [secondaryUomId](FeedstocksServiceCountReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](FeedstocksServiceCountReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](FeedstocksServiceCountReq.md#shelflifetimestampstart)
- [status](FeedstocksServiceCountReq.md#status)
- [storageId](FeedstocksServiceCountReq.md#storageid)
- [storeId](FeedstocksServiceCountReq.md#storeid)
- [storeIntakeAtEnd](FeedstocksServiceCountReq.md#storeintakeatend)
- [storeIntakeAtStart](FeedstocksServiceCountReq.md#storeintakeatstart)
- [vendorId](FeedstocksServiceCountReq.md#vendorid)
- [warrantyTimestampEnd](FeedstocksServiceCountReq.md#warrantytimestampend)
- [warrantyTimestampStart](FeedstocksServiceCountReq.md#warrantytimestampstart)
- [fields](FeedstocksServiceCountReq.md#fields)
- [runtime](FeedstocksServiceCountReq.md#runtime)
- [typeName](FeedstocksServiceCountReq.md#typename)

### Methods

- [clone](FeedstocksServiceCountReq.md#clone)
- [equals](FeedstocksServiceCountReq.md#equals)
- [fromBinary](FeedstocksServiceCountReq.md#frombinary)
- [fromJson](FeedstocksServiceCountReq.md#fromjson)
- [fromJsonString](FeedstocksServiceCountReq.md#fromjsonstring)
- [getType](FeedstocksServiceCountReq.md#gettype)
- [toBinary](FeedstocksServiceCountReq.md#tobinary)
- [toJSON](FeedstocksServiceCountReq.md#tojson)
- [toJson](FeedstocksServiceCountReq.md#tojson-1)
- [toJsonString](FeedstocksServiceCountReq.md#tojsonstring)
- [equals](FeedstocksServiceCountReq.md#equals-1)
- [fromBinary](FeedstocksServiceCountReq.md#frombinary-1)
- [fromJson](FeedstocksServiceCountReq.md#fromjson-1)
- [fromJsonString](FeedstocksServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FeedstocksServiceCountReq**(`data?`): [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\> |

#### Returns

[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Overrides

Message\&lt;FeedstocksServiceCountReq\&gt;.constructor

#### Defined in

src/feedstocks.scailo_pb.ts:1442

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the feedstock

**`Generated`**

from field: string code = 34;

#### Defined in

src/feedstocks.scailo_pb.ts:1340

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/feedstocks.scailo_pb.ts:1249

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/feedstocks.scailo_pb.ts:1242

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

src/feedstocks.scailo_pb.ts:1305

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

src/feedstocks.scailo_pb.ts:1298

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/feedstocks.scailo_pb.ts:1270

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/feedstocks.scailo_pb.ts:1333

___

### hash

• **hash**: `string` = `""`

The computed hash of the feedstock

**`Generated`**

from field: string hash = 36;

#### Defined in

src/feedstocks.scailo_pb.ts:1354

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/feedstocks.scailo_pb.ts:1347

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/feedstocks.scailo_pb.ts:1235

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

src/feedstocks.scailo_pb.ts:1424

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

src/feedstocks.scailo_pb.ts:1431

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/feedstocks.scailo_pb.ts:1263

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/feedstocks.scailo_pb.ts:1256

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

src/feedstocks.scailo_pb.ts:1312

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

src/feedstocks.scailo_pb.ts:1368

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

src/feedstocks.scailo_pb.ts:1361

___

### refFrom

• **refFrom**: [`FEEDSTOCK_REF_FROM`](../enums/FEEDSTOCK_REF_FROM.md) = `FEEDSTOCK_REF_FROM.FEEDSTOCK_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.FEEDSTOCK_REF_FROM ref_from = 31;

#### Defined in

src/feedstocks.scailo_pb.ts:1319

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/feedstocks.scailo_pb.ts:1326

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of feedstock

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

src/feedstocks.scailo_pb.ts:1375

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

src/feedstocks.scailo_pb.ts:1389

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

src/feedstocks.scailo_pb.ts:1382

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this feedstock

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

src/feedstocks.scailo_pb.ts:1277

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the feedstock is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/feedstocks.scailo_pb.ts:1417

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the feedstock is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

src/feedstocks.scailo_pb.ts:1410

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

src/feedstocks.scailo_pb.ts:1291

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

src/feedstocks.scailo_pb.ts:1284

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

--------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

src/feedstocks.scailo_pb.ts:1440

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

src/feedstocks.scailo_pb.ts:1403

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

src/feedstocks.scailo_pb.ts:1396

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/feedstocks.scailo_pb.ts:1449

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/feedstocks.scailo_pb.ts:1447

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksServiceCountReq"``

#### Defined in

src/feedstocks.scailo_pb.ts:1448

## Methods

### clone

▸ **clone**(): [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

Create a deep copy.

#### Returns

[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md) \| `PlainMessage`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\>

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
| `a` | `undefined` \| [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md) \| `PlainMessage`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\> |
| `b` | `undefined` \| [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md) \| `PlainMessage`\<[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/feedstocks.scailo_pb.ts:1494

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Defined in

src/feedstocks.scailo_pb.ts:1482

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Defined in

src/feedstocks.scailo_pb.ts:1486

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceCountReq`](FeedstocksServiceCountReq.md)

#### Defined in

src/feedstocks.scailo_pb.ts:1490
