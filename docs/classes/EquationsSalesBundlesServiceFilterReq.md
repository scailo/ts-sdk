[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServiceFilterReq

# Class: EquationsSalesBundlesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.EquationsSalesBundlesServiceFilterReq

## Hierarchy

- `Message`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\>

  ↳ **`EquationsSalesBundlesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](EquationsSalesBundlesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsSalesBundlesServiceFilterReq.md#approvedonend)
- [approvedOnStart](EquationsSalesBundlesServiceFilterReq.md#approvedonstart)
- [approverRoleId](EquationsSalesBundlesServiceFilterReq.md#approverroleid)
- [completedOnEnd](EquationsSalesBundlesServiceFilterReq.md#completedonend)
- [completedOnStart](EquationsSalesBundlesServiceFilterReq.md#completedonstart)
- [constituentFamilyId](EquationsSalesBundlesServiceFilterReq.md#constituentfamilyid)
- [count](EquationsSalesBundlesServiceFilterReq.md#count)
- [creationTimestampEnd](EquationsSalesBundlesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EquationsSalesBundlesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](EquationsSalesBundlesServiceFilterReq.md#entityuuid)
- [familyId](EquationsSalesBundlesServiceFilterReq.md#familyid)
- [isActive](EquationsSalesBundlesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](EquationsSalesBundlesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsSalesBundlesServiceFilterReq.md#modificationtimestampstart)
- [name](EquationsSalesBundlesServiceFilterReq.md#name)
- [offset](EquationsSalesBundlesServiceFilterReq.md#offset)
- [sortKey](EquationsSalesBundlesServiceFilterReq.md#sortkey)
- [sortOrder](EquationsSalesBundlesServiceFilterReq.md#sortorder)
- [status](EquationsSalesBundlesServiceFilterReq.md#status)
- [fields](EquationsSalesBundlesServiceFilterReq.md#fields)
- [runtime](EquationsSalesBundlesServiceFilterReq.md#runtime)
- [typeName](EquationsSalesBundlesServiceFilterReq.md#typename)

### Methods

- [clone](EquationsSalesBundlesServiceFilterReq.md#clone)
- [equals](EquationsSalesBundlesServiceFilterReq.md#equals)
- [fromBinary](EquationsSalesBundlesServiceFilterReq.md#frombinary)
- [fromJson](EquationsSalesBundlesServiceFilterReq.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServiceFilterReq.md#fromjsonstring)
- [getType](EquationsSalesBundlesServiceFilterReq.md#gettype)
- [toBinary](EquationsSalesBundlesServiceFilterReq.md#tobinary)
- [toJSON](EquationsSalesBundlesServiceFilterReq.md#tojson)
- [toJson](EquationsSalesBundlesServiceFilterReq.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServiceFilterReq.md#tojsonstring)
- [equals](EquationsSalesBundlesServiceFilterReq.md#equals-1)
- [fromBinary](EquationsSalesBundlesServiceFilterReq.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServiceFilterReq.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServiceFilterReq**(`data?`): [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\> |

#### Returns

[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Overrides

Message\&lt;EquationsSalesBundlesServiceFilterReq\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1693](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1693)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1622)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1606](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1606)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1590)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1638)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1670)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1654](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1654)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1691)

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

[src/equations_sales_bundles.scailo_pb.ts:1444](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1444)

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

[src/equations_sales_bundles.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1514)

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

[src/equations_sales_bundles.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1498)

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

[src/equations_sales_bundles.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1562)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1684)

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

[src/equations_sales_bundles.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1428)

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

[src/equations_sales_bundles.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1546)

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

[src/equations_sales_bundles.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1530)

___

### name

• **name**: `string` = `""`

The name of the equation sales bundle

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1677](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1677)

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

[src/equations_sales_bundles.scailo_pb.ts:1460](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1460)

___

### sortKey

• **sortKey**: [`EQUATION_SALES_BUNDLE_SORT_KEY`](../enums/EQUATION_SALES_BUNDLE_SORT_KEY.md) = `EQUATION_SALES_BUNDLE_SORT_KEY.EQUATION_SALES_BUNDLE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.EQUATION_SALES_BUNDLE_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1482](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1482)

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

[src/equations_sales_bundles.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1472)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1574)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1700)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1698](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1698)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesServiceFilterReq"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1699](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1699)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1735](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1735)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1723)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1727)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceFilterReq`](EquationsSalesBundlesServiceFilterReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1731)
