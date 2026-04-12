[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceFilterReq

# Class: EquationsFamiliesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.EquationsFamiliesServiceFilterReq

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\>

  ↳ **`EquationsFamiliesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](EquationsFamiliesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsFamiliesServiceFilterReq.md#approvedonend)
- [approvedOnStart](EquationsFamiliesServiceFilterReq.md#approvedonstart)
- [approverRoleId](EquationsFamiliesServiceFilterReq.md#approverroleid)
- [completedOnEnd](EquationsFamiliesServiceFilterReq.md#completedonend)
- [completedOnStart](EquationsFamiliesServiceFilterReq.md#completedonstart)
- [constituentFamilyId](EquationsFamiliesServiceFilterReq.md#constituentfamilyid)
- [count](EquationsFamiliesServiceFilterReq.md#count)
- [creationTimestampEnd](EquationsFamiliesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EquationsFamiliesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](EquationsFamiliesServiceFilterReq.md#entityuuid)
- [familyId](EquationsFamiliesServiceFilterReq.md#familyid)
- [isActive](EquationsFamiliesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](EquationsFamiliesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsFamiliesServiceFilterReq.md#modificationtimestampstart)
- [name](EquationsFamiliesServiceFilterReq.md#name)
- [offset](EquationsFamiliesServiceFilterReq.md#offset)
- [sortKey](EquationsFamiliesServiceFilterReq.md#sortkey)
- [sortOrder](EquationsFamiliesServiceFilterReq.md#sortorder)
- [status](EquationsFamiliesServiceFilterReq.md#status)
- [fields](EquationsFamiliesServiceFilterReq.md#fields)
- [runtime](EquationsFamiliesServiceFilterReq.md#runtime)
- [typeName](EquationsFamiliesServiceFilterReq.md#typename)

### Methods

- [clone](EquationsFamiliesServiceFilterReq.md#clone)
- [equals](EquationsFamiliesServiceFilterReq.md#equals)
- [fromBinary](EquationsFamiliesServiceFilterReq.md#frombinary)
- [fromJson](EquationsFamiliesServiceFilterReq.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceFilterReq.md#fromjsonstring)
- [getType](EquationsFamiliesServiceFilterReq.md#gettype)
- [toBinary](EquationsFamiliesServiceFilterReq.md#tobinary)
- [toJSON](EquationsFamiliesServiceFilterReq.md#tojson)
- [toJson](EquationsFamiliesServiceFilterReq.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceFilterReq.md#tojsonstring)
- [equals](EquationsFamiliesServiceFilterReq.md#equals-1)
- [fromBinary](EquationsFamiliesServiceFilterReq.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceFilterReq.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceFilterReq**(`data?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceFilterReq\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:1693](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1693)

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

[src/equations_families.scailo_pb.ts:1622](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1622)

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

[src/equations_families.scailo_pb.ts:1606](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1606)

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

[src/equations_families.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1590)

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

[src/equations_families.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1638)

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

[src/equations_families.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1670)

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

[src/equations_families.scailo_pb.ts:1654](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1654)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

[src/equations_families.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1691)

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

[src/equations_families.scailo_pb.ts:1444](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1444)

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

[src/equations_families.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1514)

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

[src/equations_families.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1498)

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

[src/equations_families.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1562)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/equations_families.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1684)

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

[src/equations_families.scailo_pb.ts:1428](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1428)

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

[src/equations_families.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1546)

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

[src/equations_families.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1530)

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_families.scailo_pb.ts:1677](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1677)

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

[src/equations_families.scailo_pb.ts:1460](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1460)

___

### sortKey

• **sortKey**: [`EQUATION_FAMILY_SORT_KEY`](../enums/EQUATION_FAMILY_SORT_KEY.md) = `EQUATION_FAMILY_SORT_KEY.EQUATION_FAMILY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.EQUATION_FAMILY_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_families.scailo_pb.ts:1482](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1482)

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

[src/equations_families.scailo_pb.ts:1472](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1472)

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

[src/equations_families.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1574)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1700)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:1698](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1698)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceFilterReq"``

#### Defined in

[src/equations_families.scailo_pb.ts:1699](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1699)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md) \| `PlainMessage`\<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:1735](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1735)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1723)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1727)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L1731)
