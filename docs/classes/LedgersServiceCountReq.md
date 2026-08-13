[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceCountReq

# Class: LedgersServiceCountReq

Target filter request for counting ledger records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.LedgersServiceCountReq

## Hierarchy

- `Message`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\>

  ↳ **`LedgersServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LedgersServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LedgersServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LedgersServiceCountReq.md#approvedonend)
- [approvedOnStart](LedgersServiceCountReq.md#approvedonstart)
- [approverRoleId](LedgersServiceCountReq.md#approverroleid)
- [code](LedgersServiceCountReq.md#code)
- [creationTimestampEnd](LedgersServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LedgersServiceCountReq.md#creationtimestampstart)
- [entityUuid](LedgersServiceCountReq.md#entityuuid)
- [isActive](LedgersServiceCountReq.md#isactive)
- [isLeaf](LedgersServiceCountReq.md#isleaf)
- [modificationTimestampEnd](LedgersServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LedgersServiceCountReq.md#modificationtimestampstart)
- [name](LedgersServiceCountReq.md#name)
- [parentLedgerId](LedgersServiceCountReq.md#parentledgerid)
- [status](LedgersServiceCountReq.md#status)
- [fields](LedgersServiceCountReq.md#fields)
- [runtime](LedgersServiceCountReq.md#runtime)
- [typeName](LedgersServiceCountReq.md#typename)

### Methods

- [clone](LedgersServiceCountReq.md#clone)
- [equals](LedgersServiceCountReq.md#equals)
- [fromBinary](LedgersServiceCountReq.md#frombinary)
- [fromJson](LedgersServiceCountReq.md#fromjson)
- [fromJsonString](LedgersServiceCountReq.md#fromjsonstring)
- [getType](LedgersServiceCountReq.md#gettype)
- [toBinary](LedgersServiceCountReq.md#tobinary)
- [toJSON](LedgersServiceCountReq.md#tojson)
- [toJson](LedgersServiceCountReq.md#tojson-1)
- [toJsonString](LedgersServiceCountReq.md#tojsonstring)
- [equals](LedgersServiceCountReq.md#equals-1)
- [fromBinary](LedgersServiceCountReq.md#frombinary-1)
- [fromJson](LedgersServiceCountReq.md#fromjson-1)
- [fromJsonString](LedgersServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceCountReq**(`data?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Overrides

Message\&lt;LedgersServiceCountReq\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1319)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/ledgers.scailo_pb.ts:1239](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1239)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/ledgers.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1223)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/ledgers.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1207)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/ledgers.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1255)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or alphanumeric token by which the ledger account is classified in the Chart of Accounts.

**`Example`**

```ts
"LEDGER-1010-OPEX"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/ledgers.scailo_pb.ts:1287](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1287)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/ledgers.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1131)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/ledgers.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1115)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/ledgers.scailo_pb.ts:1179](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1179)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1099)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 23;

#### Defined in

[src/ledgers.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1317)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/ledgers.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1163)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/ledgers.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1147)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly descriptive name of the ledger account.

**`Example`**

```ts
"General Operating Expenses"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/ledgers.scailo_pb.ts:1271](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1271)

___

### parentLedgerId

• `Optional` **parentLedgerId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_ledger_id = 22;

#### Defined in

[src/ledgers.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1303)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/ledgers.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1191)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1326)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1324)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceCountReq"``

#### Defined in

[src/ledgers.scailo_pb.ts:1325](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1325)

## Methods

### clone

▸ **clone**(): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

Create a deep copy.

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceCountReq`](LedgersServiceCountReq.md) \| `PlainMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LedgersServiceCountReq`](LedgersServiceCountReq.md) \| `PlainMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |
| `b` | `undefined` \| [`LedgersServiceCountReq`](LedgersServiceCountReq.md) \| `PlainMessage`\<[`LedgersServiceCountReq`](LedgersServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1356)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1344](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1344)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1348](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1348)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceCountReq`](LedgersServiceCountReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L1352)
