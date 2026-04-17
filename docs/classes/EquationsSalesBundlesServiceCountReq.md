[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsSalesBundlesServiceCountReq

# Class: EquationsSalesBundlesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.EquationsSalesBundlesServiceCountReq

## Hierarchy

- `Message`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\>

  ↳ **`EquationsSalesBundlesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](EquationsSalesBundlesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](EquationsSalesBundlesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsSalesBundlesServiceCountReq.md#approvedonend)
- [approvedOnStart](EquationsSalesBundlesServiceCountReq.md#approvedonstart)
- [approverRoleId](EquationsSalesBundlesServiceCountReq.md#approverroleid)
- [completedOnEnd](EquationsSalesBundlesServiceCountReq.md#completedonend)
- [completedOnStart](EquationsSalesBundlesServiceCountReq.md#completedonstart)
- [constituentFamilyId](EquationsSalesBundlesServiceCountReq.md#constituentfamilyid)
- [creationTimestampEnd](EquationsSalesBundlesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](EquationsSalesBundlesServiceCountReq.md#creationtimestampstart)
- [entityUuid](EquationsSalesBundlesServiceCountReq.md#entityuuid)
- [familyId](EquationsSalesBundlesServiceCountReq.md#familyid)
- [isActive](EquationsSalesBundlesServiceCountReq.md#isactive)
- [modificationTimestampEnd](EquationsSalesBundlesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsSalesBundlesServiceCountReq.md#modificationtimestampstart)
- [name](EquationsSalesBundlesServiceCountReq.md#name)
- [status](EquationsSalesBundlesServiceCountReq.md#status)
- [fields](EquationsSalesBundlesServiceCountReq.md#fields)
- [runtime](EquationsSalesBundlesServiceCountReq.md#runtime)
- [typeName](EquationsSalesBundlesServiceCountReq.md#typename)

### Methods

- [clone](EquationsSalesBundlesServiceCountReq.md#clone)
- [equals](EquationsSalesBundlesServiceCountReq.md#equals)
- [fromBinary](EquationsSalesBundlesServiceCountReq.md#frombinary)
- [fromJson](EquationsSalesBundlesServiceCountReq.md#fromjson)
- [fromJsonString](EquationsSalesBundlesServiceCountReq.md#fromjsonstring)
- [getType](EquationsSalesBundlesServiceCountReq.md#gettype)
- [toBinary](EquationsSalesBundlesServiceCountReq.md#tobinary)
- [toJSON](EquationsSalesBundlesServiceCountReq.md#tojson)
- [toJson](EquationsSalesBundlesServiceCountReq.md#tojson-1)
- [toJsonString](EquationsSalesBundlesServiceCountReq.md#tojsonstring)
- [equals](EquationsSalesBundlesServiceCountReq.md#equals-1)
- [fromBinary](EquationsSalesBundlesServiceCountReq.md#frombinary-1)
- [fromJson](EquationsSalesBundlesServiceCountReq.md#fromjson-1)
- [fromJsonString](EquationsSalesBundlesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsSalesBundlesServiceCountReq**(`data?`): [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\> |

#### Returns

[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Overrides

Message\&lt;EquationsSalesBundlesServiceCountReq\&gt;.constructor

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1968)

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

[src/equations_sales_bundles.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1897)

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

[src/equations_sales_bundles.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1881)

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

[src/equations_sales_bundles.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1865)

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

[src/equations_sales_bundles.scailo_pb.ts:1913](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1913)

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

[src/equations_sales_bundles.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1945)

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

[src/equations_sales_bundles.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1929)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1966)

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

[src/equations_sales_bundles.scailo_pb.ts:1789](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1789)

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

[src/equations_sales_bundles.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1773)

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

[src/equations_sales_bundles.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1837)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1959)

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

[src/equations_sales_bundles.scailo_pb.ts:1757](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1757)

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

[src/equations_sales_bundles.scailo_pb.ts:1821](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1821)

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

[src/equations_sales_bundles.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1805)

___

### name

• **name**: `string` = `""`

The name of the equation sales bundle

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1952](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1952)

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

[src/equations_sales_bundles.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1849)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1975)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1973)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsSalesBundlesServiceCountReq"``

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1974](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1974)

## Methods

### clone

▸ **clone**(): [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

Create a deep copy.

#### Returns

[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\> |
| `b` | `undefined` \| [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md) \| `PlainMessage`\<[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:2006](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L2006)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1994](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1994)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:1998](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L1998)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsSalesBundlesServiceCountReq`](EquationsSalesBundlesServiceCountReq.md)

#### Defined in

[src/equations_sales_bundles.scailo_pb.ts:2002](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/equations_sales_bundles.scailo_pb.ts#L2002)
