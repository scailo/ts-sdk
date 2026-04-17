[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SearchReturnableInventoryReq

# Class: SearchReturnableInventoryReq

Describes the message that consists of parameters that are required to search for returnable inventory

**`Generated`**

from message Scailo.SearchReturnableInventoryReq

## Hierarchy

- `Message`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\>

  ↳ **`SearchReturnableInventoryReq`**

## Table of contents

### Constructors

- [constructor](SearchReturnableInventoryReq.md#constructor)

### Properties

- [count](SearchReturnableInventoryReq.md#count)
- [entityUuid](SearchReturnableInventoryReq.md#entityuuid)
- [familyId](SearchReturnableInventoryReq.md#familyid)
- [isActive](SearchReturnableInventoryReq.md#isactive)
- [isQcReportPublic](SearchReturnableInventoryReq.md#isqcreportpublic)
- [locationId](SearchReturnableInventoryReq.md#locationid)
- [offset](SearchReturnableInventoryReq.md#offset)
- [quantityRemainingMax](SearchReturnableInventoryReq.md#quantityremainingmax)
- [quantityRemainingMin](SearchReturnableInventoryReq.md#quantityremainingmin)
- [searchKey](SearchReturnableInventoryReq.md#searchkey)
- [secondaryUomId](SearchReturnableInventoryReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](SearchReturnableInventoryReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](SearchReturnableInventoryReq.md#shelflifetimestampstart)
- [sortKey](SearchReturnableInventoryReq.md#sortkey)
- [sortOrder](SearchReturnableInventoryReq.md#sortorder)
- [warrantyTimestampEnd](SearchReturnableInventoryReq.md#warrantytimestampend)
- [warrantyTimestampStart](SearchReturnableInventoryReq.md#warrantytimestampstart)
- [fields](SearchReturnableInventoryReq.md#fields)
- [runtime](SearchReturnableInventoryReq.md#runtime)
- [typeName](SearchReturnableInventoryReq.md#typename)

### Methods

- [clone](SearchReturnableInventoryReq.md#clone)
- [equals](SearchReturnableInventoryReq.md#equals)
- [fromBinary](SearchReturnableInventoryReq.md#frombinary)
- [fromJson](SearchReturnableInventoryReq.md#fromjson)
- [fromJsonString](SearchReturnableInventoryReq.md#fromjsonstring)
- [getType](SearchReturnableInventoryReq.md#gettype)
- [toBinary](SearchReturnableInventoryReq.md#tobinary)
- [toJSON](SearchReturnableInventoryReq.md#tojson)
- [toJson](SearchReturnableInventoryReq.md#tojson-1)
- [toJsonString](SearchReturnableInventoryReq.md#tojsonstring)
- [equals](SearchReturnableInventoryReq.md#equals-1)
- [fromBinary](SearchReturnableInventoryReq.md#frombinary-1)
- [fromJson](SearchReturnableInventoryReq.md#fromjson-1)
- [fromJsonString](SearchReturnableInventoryReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SearchReturnableInventoryReq**(`data?`): [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\> |

#### Returns

[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Overrides

Message\&lt;SearchReturnableInventoryReq\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:1044](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1044)

## Properties

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

[src/inventory.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L902)

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

[src/inventory.scailo_pb.ts:956](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L956)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/inventory.scailo_pb.ts:979](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L979)

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

[src/inventory.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L886)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/inventory.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1035)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/inventory.scailo_pb.ts:1042](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1042)

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

[src/inventory.scailo_pb.ts:918](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L918)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/inventory.scailo_pb.ts:993](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L993)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/inventory.scailo_pb.ts:986](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L986)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/inventory.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L972)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of inventory item

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/inventory.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1000)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/inventory.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1014)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/inventory.scailo_pb.ts:1007](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1007)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/inventory.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L940)

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

[src/inventory.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L930)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/inventory.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1028)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/inventory.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1021)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1051)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1049)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SearchReturnableInventoryReq"``

#### Defined in

[src/inventory.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1050)

## Methods

### clone

▸ **clone**(): [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

Create a deep copy.

#### Returns

[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md) \| `PlainMessage`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\>

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
| `a` | `undefined` \| [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md) \| `PlainMessage`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\> |
| `b` | `undefined` \| [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md) \| `PlainMessage`\<[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1083)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1071)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1075)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SearchReturnableInventoryReq`](SearchReturnableInventoryReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/inventory.scailo_pb.ts#L1079)
