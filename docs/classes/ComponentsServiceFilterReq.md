[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceFilterReq

# Class: ComponentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ComponentsServiceFilterReq

## Hierarchy

- `Message`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\>

  ↳ **`ComponentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceFilterReq.md#constructor)

### Properties

- [clientId](ComponentsServiceFilterReq.md#clientid)
- [code](ComponentsServiceFilterReq.md#code)
- [count](ComponentsServiceFilterReq.md#count)
- [creationTimestampEnd](ComponentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ComponentsServiceFilterReq.md#creationtimestampstart)
- [discardedAtEnd](ComponentsServiceFilterReq.md#discardedatend)
- [discardedAtStart](ComponentsServiceFilterReq.md#discardedatstart)
- [entityUuid](ComponentsServiceFilterReq.md#entityuuid)
- [familyId](ComponentsServiceFilterReq.md#familyid)
- [formData](ComponentsServiceFilterReq.md#formdata)
- [hash](ComponentsServiceFilterReq.md#hash)
- [includeFormData](ComponentsServiceFilterReq.md#includeformdata)
- [internalItemCode](ComponentsServiceFilterReq.md#internalitemcode)
- [isActive](ComponentsServiceFilterReq.md#isactive)
- [isQcReportPublic](ComponentsServiceFilterReq.md#isqcreportpublic)
- [locationId](ComponentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](ComponentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ComponentsServiceFilterReq.md#modificationtimestampstart)
- [offset](ComponentsServiceFilterReq.md#offset)
- [parentRefId](ComponentsServiceFilterReq.md#parentrefid)
- [quantityRemainingMax](ComponentsServiceFilterReq.md#quantityremainingmax)
- [quantityRemainingMin](ComponentsServiceFilterReq.md#quantityremainingmin)
- [refFrom](ComponentsServiceFilterReq.md#reffrom)
- [refId](ComponentsServiceFilterReq.md#refid)
- [secondaryUomId](ComponentsServiceFilterReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](ComponentsServiceFilterReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](ComponentsServiceFilterReq.md#shelflifetimestampstart)
- [sortKey](ComponentsServiceFilterReq.md#sortkey)
- [sortOrder](ComponentsServiceFilterReq.md#sortorder)
- [status](ComponentsServiceFilterReq.md#status)
- [storageId](ComponentsServiceFilterReq.md#storageid)
- [storeId](ComponentsServiceFilterReq.md#storeid)
- [storeIntakeAtEnd](ComponentsServiceFilterReq.md#storeintakeatend)
- [storeIntakeAtStart](ComponentsServiceFilterReq.md#storeintakeatstart)
- [vendorId](ComponentsServiceFilterReq.md#vendorid)
- [warrantyTimestampEnd](ComponentsServiceFilterReq.md#warrantytimestampend)
- [warrantyTimestampStart](ComponentsServiceFilterReq.md#warrantytimestampstart)
- [fields](ComponentsServiceFilterReq.md#fields)
- [runtime](ComponentsServiceFilterReq.md#runtime)
- [typeName](ComponentsServiceFilterReq.md#typename)

### Methods

- [clone](ComponentsServiceFilterReq.md#clone)
- [equals](ComponentsServiceFilterReq.md#equals)
- [fromBinary](ComponentsServiceFilterReq.md#frombinary)
- [fromJson](ComponentsServiceFilterReq.md#fromjson)
- [fromJsonString](ComponentsServiceFilterReq.md#fromjsonstring)
- [getType](ComponentsServiceFilterReq.md#gettype)
- [toBinary](ComponentsServiceFilterReq.md#tobinary)
- [toJSON](ComponentsServiceFilterReq.md#tojson)
- [toJson](ComponentsServiceFilterReq.md#tojson-1)
- [toJsonString](ComponentsServiceFilterReq.md#tojsonstring)
- [equals](ComponentsServiceFilterReq.md#equals-1)
- [fromBinary](ComponentsServiceFilterReq.md#frombinary-1)
- [fromJson](ComponentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ComponentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceFilterReq**(`data?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Overrides

Message\&lt;ComponentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1427)

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Filter by the ID of the client for whom the item has been issued

--------------------------------------------------

**`Generated`**

from field: uint64 client_id = 82;

#### Defined in

[src/components.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1402)

___

### code

• **code**: `string` = `""`

The auto generated code of the component

**`Generated`**

from field: string code = 34;

#### Defined in

[src/components.scailo_pb.ts:1295](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1295)

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

[src/components.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1107)

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

[src/components.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1177)

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

[src/components.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1161)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/components.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1260)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/components.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1253)

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

[src/components.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1225)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:1288](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1288)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/components.scailo_pb.ts:1412](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1412)

___

### hash

• **hash**: `string` = `""`

The computed hash of the component

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/components.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1309)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/components.scailo_pb.ts:1425](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1425)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Filter by the exact internal code

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1302)

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

[src/components.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1091)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:1379](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1379)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1386)

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

[src/components.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1209)

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

[src/components.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1193)

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

[src/components.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1123)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/components.scailo_pb.ts:1267](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1267)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/components.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1323)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/components.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1316)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1274)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1281)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/components.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1330)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/components.scailo_pb.ts:1344](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1344)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/components.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1337)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/components.scailo_pb.ts:1145](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1145)

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

[src/components.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1135)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this component

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/components.scailo_pb.ts:1232](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1232)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:1372](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1372)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/components.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1365)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/components.scailo_pb.ts:1246](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1246)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/components.scailo_pb.ts:1239](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1239)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

[src/components.scailo_pb.ts:1393](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1393)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/components.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1358)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/components.scailo_pb.ts:1351](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1351)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:1434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1434)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:1432](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1432)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceFilterReq"``

#### Defined in

[src/components.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1433)

## Methods

### clone

▸ **clone**(): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md) \| `PlainMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md) \| `PlainMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md) \| `PlainMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:1486](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1486)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Defined in

[src/components.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1474)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Defined in

[src/components.scailo_pb.ts:1478](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1478)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Defined in

[src/components.scailo_pb.ts:1482](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/components.scailo_pb.ts#L1482)
