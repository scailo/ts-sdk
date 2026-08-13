[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LedgersServiceFilterReq

# Class: LedgersServiceFilterReq

Advanced filter request for searching and paginating ledgers using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.LedgersServiceFilterReq

## Hierarchy

- `Message`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\>

  ↳ **`LedgersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LedgersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LedgersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LedgersServiceFilterReq.md#approvedonend)
- [approvedOnStart](LedgersServiceFilterReq.md#approvedonstart)
- [approverRoleId](LedgersServiceFilterReq.md#approverroleid)
- [code](LedgersServiceFilterReq.md#code)
- [count](LedgersServiceFilterReq.md#count)
- [creationTimestampEnd](LedgersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LedgersServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LedgersServiceFilterReq.md#entityuuid)
- [isActive](LedgersServiceFilterReq.md#isactive)
- [isLeaf](LedgersServiceFilterReq.md#isleaf)
- [modificationTimestampEnd](LedgersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LedgersServiceFilterReq.md#modificationtimestampstart)
- [name](LedgersServiceFilterReq.md#name)
- [offset](LedgersServiceFilterReq.md#offset)
- [parentLedgerId](LedgersServiceFilterReq.md#parentledgerid)
- [sortKey](LedgersServiceFilterReq.md#sortkey)
- [sortOrder](LedgersServiceFilterReq.md#sortorder)
- [status](LedgersServiceFilterReq.md#status)
- [fields](LedgersServiceFilterReq.md#fields)
- [runtime](LedgersServiceFilterReq.md#runtime)
- [typeName](LedgersServiceFilterReq.md#typename)

### Methods

- [clone](LedgersServiceFilterReq.md#clone)
- [equals](LedgersServiceFilterReq.md#equals)
- [fromBinary](LedgersServiceFilterReq.md#frombinary)
- [fromJson](LedgersServiceFilterReq.md#fromjson)
- [fromJsonString](LedgersServiceFilterReq.md#fromjsonstring)
- [getType](LedgersServiceFilterReq.md#gettype)
- [toBinary](LedgersServiceFilterReq.md#tobinary)
- [toJSON](LedgersServiceFilterReq.md#tojson)
- [toJson](LedgersServiceFilterReq.md#tojson-1)
- [toJsonString](LedgersServiceFilterReq.md#tojsonstring)
- [equals](LedgersServiceFilterReq.md#equals-1)
- [fromBinary](LedgersServiceFilterReq.md#frombinary-1)
- [fromJson](LedgersServiceFilterReq.md#fromjson-1)
- [fromJsonString](LedgersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LedgersServiceFilterReq**(`data?`): [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\> |

#### Returns

[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Overrides

Message\&lt;LedgersServiceFilterReq\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1030)

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

[src/ledgers.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L950)

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

[src/ledgers.scailo_pb.ts:934](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L934)

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

[src/ledgers.scailo_pb.ts:918](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L918)

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

[src/ledgers.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L966)

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

[src/ledgers.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L998)

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

[src/ledgers.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L772)

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

[src/ledgers.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L842)

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

[src/ledgers.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L826)

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

[src/ledgers.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L890)

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

[src/ledgers.scailo_pb.ts:756](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L756)

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

[src/ledgers.scailo_pb.ts:1028](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1028)

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

[src/ledgers.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L874)

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

[src/ledgers.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L858)

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

[src/ledgers.scailo_pb.ts:982](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L982)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/ledgers.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L788)

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

[src/ledgers.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1014)

___

### sortKey

• `Optional` **sortKey**: [`LEDGER_SORT_KEY`](../enums/LEDGER_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.LEDGER_SORT_KEY sort_key = 5;

#### Defined in

[src/ledgers.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L810)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/ledgers.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L800)

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

[src/ledgers.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L902)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1037)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1035)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LedgersServiceFilterReq"``

#### Defined in

[src/ledgers.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1036)

## Methods

### clone

▸ **clone**(): [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md) \| `PlainMessage`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md) \| `PlainMessage`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md) \| `PlainMessage`\<[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:1071](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1071)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1059)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1063](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1063)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LedgersServiceFilterReq`](LedgersServiceFilterReq.md)

#### Defined in

[src/ledgers.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/ledgers.scailo_pb.ts#L1067)
