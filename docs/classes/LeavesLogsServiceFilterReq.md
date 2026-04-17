[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesLogsServiceFilterReq

# Class: LeavesLogsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LeavesLogsServiceFilterReq

## Hierarchy

- `Message`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\>

  ↳ **`LeavesLogsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesLogsServiceFilterReq.md#constructor)

### Properties

- [count](LeavesLogsServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesLogsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesLogsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesLogsServiceFilterReq.md#entityuuid)
- [isActive](LeavesLogsServiceFilterReq.md#isactive)
- [leaveTypeId](LeavesLogsServiceFilterReq.md#leavetypeid)
- [modificationTimestampEnd](LeavesLogsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesLogsServiceFilterReq.md#modificationtimestampstart)
- [offset](LeavesLogsServiceFilterReq.md#offset)
- [quantityMax](LeavesLogsServiceFilterReq.md#quantitymax)
- [quantityMin](LeavesLogsServiceFilterReq.md#quantitymin)
- [refFrom](LeavesLogsServiceFilterReq.md#reffrom)
- [refId](LeavesLogsServiceFilterReq.md#refid)
- [sortKey](LeavesLogsServiceFilterReq.md#sortkey)
- [sortOrder](LeavesLogsServiceFilterReq.md#sortorder)
- [uomId](LeavesLogsServiceFilterReq.md#uomid)
- [userId](LeavesLogsServiceFilterReq.md#userid)
- [fields](LeavesLogsServiceFilterReq.md#fields)
- [runtime](LeavesLogsServiceFilterReq.md#runtime)
- [typeName](LeavesLogsServiceFilterReq.md#typename)

### Methods

- [clone](LeavesLogsServiceFilterReq.md#clone)
- [equals](LeavesLogsServiceFilterReq.md#equals)
- [fromBinary](LeavesLogsServiceFilterReq.md#frombinary)
- [fromJson](LeavesLogsServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesLogsServiceFilterReq.md#fromjsonstring)
- [getType](LeavesLogsServiceFilterReq.md#gettype)
- [toBinary](LeavesLogsServiceFilterReq.md#tobinary)
- [toJSON](LeavesLogsServiceFilterReq.md#tojson)
- [toJson](LeavesLogsServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesLogsServiceFilterReq.md#tojsonstring)
- [equals](LeavesLogsServiceFilterReq.md#equals-1)
- [fromBinary](LeavesLogsServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesLogsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesLogsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesLogsServiceFilterReq**(`data?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Overrides

Message\&lt;LeavesLogsServiceFilterReq\&gt;.constructor

#### Defined in

[src/leaves_logs.scailo_pb.ts:579](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L579)

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

[src/leaves_logs.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L410)

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

[src/leaves_logs.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L480)

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

[src/leaves_logs.scailo_pb.ts:464](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L464)

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

[src/leaves_logs.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L528)

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

[src/leaves_logs.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L394)

___

### leaveTypeId

• **leaveTypeId**: `bigint` = `protoInt64.zero`

The leave type ID

**`Generated`**

from field: uint64 leave_type_id = 14;

#### Defined in

[src/leaves_logs.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L563)

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

[src/leaves_logs.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L512)

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

[src/leaves_logs.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L496)

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

[src/leaves_logs.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L426)

___

### quantityMax

• **quantityMax**: `bigint` = `protoInt64.zero`

The maximum quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity_max = 16;

#### Defined in

[src/leaves_logs.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L577)

___

### quantityMin

• **quantityMin**: `bigint` = `protoInt64.zero`

The minimum quantity of leaves (in cents)

**`Generated`**

from field: uint64 quantity_min = 15;

#### Defined in

[src/leaves_logs.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L570)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on the basis of which this record is created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/leaves_logs.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L549)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The corresponding reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/leaves_logs.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L556)

___

### sortKey

• **sortKey**: [`LEAVE_LOG_SORT_KEY`](../enums/LEAVE_LOG_SORT_KEY.md) = `LEAVE_LOG_SORT_KEY.LEAVE_LOG_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.LEAVE_LOG_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_logs.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L448)

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

[src/leaves_logs.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L438)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the uom

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

[src/leaves_logs.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L542)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user for whom this log needs to be made

**`Generated`**

from field: uint64 user_id = 10;

#### Defined in

[src/leaves_logs.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L535)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_logs.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L586)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_logs.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L584)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesLogsServiceFilterReq"``

#### Defined in

[src/leaves_logs.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L585)

## Methods

### clone

▸ **clone**(): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md) \| `PlainMessage`\<[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_logs.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L618)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L606)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L610)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesLogsServiceFilterReq`](LeavesLogsServiceFilterReq.md)

#### Defined in

[src/leaves_logs.scailo_pb.ts:614](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/leaves_logs.scailo_pb.ts#L614)
