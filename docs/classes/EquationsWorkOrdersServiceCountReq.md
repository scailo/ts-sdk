[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceCountReq

# Class: EquationsWorkOrdersServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.EquationsWorkOrdersServiceCountReq

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\>

  ↳ **`EquationsWorkOrdersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](EquationsWorkOrdersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsWorkOrdersServiceCountReq.md#approvedonend)
- [approvedOnStart](EquationsWorkOrdersServiceCountReq.md#approvedonstart)
- [approverRoleId](EquationsWorkOrdersServiceCountReq.md#approverroleid)
- [completedOnEnd](EquationsWorkOrdersServiceCountReq.md#completedonend)
- [completedOnStart](EquationsWorkOrdersServiceCountReq.md#completedonstart)
- [constituentFamilyId](EquationsWorkOrdersServiceCountReq.md#constituentfamilyid)
- [creationTimestampEnd](EquationsWorkOrdersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](EquationsWorkOrdersServiceCountReq.md#creationtimestampstart)
- [entityUuid](EquationsWorkOrdersServiceCountReq.md#entityuuid)
- [isActive](EquationsWorkOrdersServiceCountReq.md#isactive)
- [modificationTimestampEnd](EquationsWorkOrdersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsWorkOrdersServiceCountReq.md#modificationtimestampstart)
- [name](EquationsWorkOrdersServiceCountReq.md#name)
- [status](EquationsWorkOrdersServiceCountReq.md#status)
- [workOrderId](EquationsWorkOrdersServiceCountReq.md#workorderid)
- [fields](EquationsWorkOrdersServiceCountReq.md#fields)
- [runtime](EquationsWorkOrdersServiceCountReq.md#runtime)
- [typeName](EquationsWorkOrdersServiceCountReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceCountReq.md#clone)
- [equals](EquationsWorkOrdersServiceCountReq.md#equals)
- [fromBinary](EquationsWorkOrdersServiceCountReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceCountReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceCountReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceCountReq.md#gettype)
- [toBinary](EquationsWorkOrdersServiceCountReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceCountReq.md#tojson)
- [toJson](EquationsWorkOrdersServiceCountReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceCountReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceCountReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceCountReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceCountReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceCountReq**(`data?`): [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\> |

#### Returns

[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServiceCountReq\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1984)

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

[src/equations_work_orders.scailo_pb.ts:1913](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1913)

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

[src/equations_work_orders.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1897)

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

[src/equations_work_orders.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1881)

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

[src/equations_work_orders.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1929)

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

[src/equations_work_orders.scailo_pb.ts:1961](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1961)

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

[src/equations_work_orders.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1945)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1982)

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

[src/equations_work_orders.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1805)

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

[src/equations_work_orders.scailo_pb.ts:1789](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1789)

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

[src/equations_work_orders.scailo_pb.ts:1853](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1853)

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

[src/equations_work_orders.scailo_pb.ts:1773](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1773)

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

[src/equations_work_orders.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1837)

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

[src/equations_work_orders.scailo_pb.ts:1821](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1821)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1968)

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

[src/equations_work_orders.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1865)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: uint64 work_order_id = 21;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1975](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1975)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1991)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1989)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServiceCountReq"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1990](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L1990)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L2022)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L2010)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L2014)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceCountReq`](EquationsWorkOrdersServiceCountReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:2018](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_work_orders.scailo_pb.ts#L2018)
