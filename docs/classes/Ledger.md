[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Ledger

# Class: Ledger

Represents a full Ledger within the system.

**`Generated`**

from message Scailo.Ledger

## Hierarchy

- `Message`\<[`Ledger`](Ledger.md)\>

  ↳ **`Ledger`**

## Table of contents

### Constructors

- [constructor](Ledger.md#constructor)

### Properties

- [approvalMetadata](Ledger.md#approvalmetadata)
- [code](Ledger.md#code)
- [description](Ledger.md#description)
- [entityUuid](Ledger.md#entityuuid)
- [isLeaf](Ledger.md#isleaf)
- [logs](Ledger.md#logs)
- [metadata](Ledger.md#metadata)
- [name](Ledger.md#name)
- [parentLedgerId](Ledger.md#parentledgerid)
- [status](Ledger.md#status)
- [fields](Ledger.md#fields)
- [runtime](Ledger.md#runtime)
- [typeName](Ledger.md#typename)

### Methods

- [clone](Ledger.md#clone)
- [equals](Ledger.md#equals)
- [fromBinary](Ledger.md#frombinary)
- [fromJson](Ledger.md#fromjson)
- [fromJsonString](Ledger.md#fromjsonstring)
- [getType](Ledger.md#gettype)
- [toBinary](Ledger.md#tobinary)
- [toJSON](Ledger.md#tojson)
- [toJson](Ledger.md#tojson-1)
- [toJsonString](Ledger.md#tojsonstring)
- [equals](Ledger.md#equals-1)
- [fromBinary](Ledger.md#frombinary-1)
- [fromJson](Ledger.md#fromjson-1)
- [fromJsonString](Ledger.md#fromjsonstring-1)

## Constructors

### constructor

• **new Ledger**(`data?`): [`Ledger`](Ledger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Ledger`](Ledger.md)\> |

#### Returns

[`Ledger`](Ledger.md)

#### Overrides

Message\&lt;Ledger\&gt;.constructor

#### Defined in

[src/ledgers.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L461)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/ledgers.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L393)

___

### code

• **code**: `string` = `""`

**`Description`**

The unique code or alphanumeric token by which the ledger account is classified in the Chart of Accounts.

**`Example`**

```ts
"LEDGER-1010-OPEX"
```

**`Generated`**

from field: string code = 11;

#### Defined in

[src/ledgers.scailo_pb.ts:429](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L429)

___

### description

• **description**: `string` = `""`

**`Description`**

Clarifying details or context regarding the ledger's intended accounting use case, currency parameters, or scope.

**`Example`**

```ts
"Tracks day-to-day corporate operating expenses, utilities, and minor regional software licenses."
```

**`Generated`**

from field: string description = 14;

#### Defined in

[src/ledgers.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L459)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/ledgers.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L377)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Description`**

Flag determining whether this ledger node is a terminal 'leaf' node that can directly hold transactional balances, or a 'non-leaf' grouping node.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_leaf = 13;

#### Defined in

[src/ledgers.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L449)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/ledgers.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L409)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/ledgers.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L385)

___

### name

• **name**: `string` = `""`

**`Description`**

The official or friendly descriptive name of the ledger account.

**`Example`**

```ts
"General Operating Expenses"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/ledgers.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L419)

___

### parentLedgerId

• **parentLedgerId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent non-leaf ledger. Defaults to 0 if this is the root or top-level node in the ledger hierarchy.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 parent_ledger_id = 12;

#### Defined in

[src/ledgers.scailo_pb.ts:439](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L439)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/ledgers.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L401)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/ledgers.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/ledgers.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Ledger"``

#### Defined in

[src/ledgers.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L467)

## Methods

### clone

▸ **clone**(): [`Ledger`](Ledger.md)

Create a deep copy.

#### Returns

[`Ledger`](Ledger.md)

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
| `other` | `undefined` \| ``null`` \| [`Ledger`](Ledger.md) \| `PlainMessage`\<[`Ledger`](Ledger.md)\> |

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

▸ **getType**(): `MessageType`\<[`Ledger`](Ledger.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Ledger`](Ledger.md)\>

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
| `a` | `undefined` \| [`Ledger`](Ledger.md) \| `PlainMessage`\<[`Ledger`](Ledger.md)\> |
| `b` | `undefined` \| [`Ledger`](Ledger.md) \| `PlainMessage`\<[`Ledger`](Ledger.md)\> |

#### Returns

`boolean`

#### Defined in

[src/ledgers.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L493)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Ledger`](Ledger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[src/ledgers.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L481)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Ledger`](Ledger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[src/ledgers.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L485)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Ledger`](Ledger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Ledger`](Ledger.md)

#### Defined in

[src/ledgers.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/ledgers.scailo_pb.ts#L489)
