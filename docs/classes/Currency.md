[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Currency

# Class: Currency

Represents a full Currency within the system.

**`Generated`**

from message Scailo.Currency

## Hierarchy

- `Message`\<[`Currency`](Currency.md)\>

  ↳ **`Currency`**

## Table of contents

### Constructors

- [constructor](Currency.md#constructor)

### Properties

- [approvalMetadata](Currency.md#approvalmetadata)
- [description](Currency.md#description)
- [entityUuid](Currency.md#entityuuid)
- [exponentName](Currency.md#exponentname)
- [logs](Currency.md#logs)
- [mantissaName](Currency.md#mantissaname)
- [metadata](Currency.md#metadata)
- [name](Currency.md#name)
- [status](Currency.md#status)
- [symbol](Currency.md#symbol)
- [fields](Currency.md#fields)
- [runtime](Currency.md#runtime)
- [typeName](Currency.md#typename)

### Methods

- [clone](Currency.md#clone)
- [equals](Currency.md#equals)
- [fromBinary](Currency.md#frombinary)
- [fromJson](Currency.md#fromjson)
- [fromJsonString](Currency.md#fromjsonstring)
- [getType](Currency.md#gettype)
- [toBinary](Currency.md#tobinary)
- [toJSON](Currency.md#tojson)
- [toJson](Currency.md#tojson-1)
- [toJsonString](Currency.md#tojsonstring)
- [equals](Currency.md#equals-1)
- [fromBinary](Currency.md#frombinary-1)
- [fromJson](Currency.md#fromjson-1)
- [fromJsonString](Currency.md#fromjsonstring-1)

## Constructors

### constructor

• **new Currency**(`data?`): [`Currency`](Currency.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Currency`](Currency.md)\> |

#### Returns

[`Currency`](Currency.md)

#### Overrides

Message\&lt;Currency\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L514)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/currencies.scailo_pb.ts:446](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L446)

___

### description

• **description**: `string` = `""`

**`Description`**

Contextual description or clarifying details outlining the specific use-case or regional scope of this currency record.

**`Example`**

```ts
"United States legal tender used for domestic operational accounts."
```

**`Generated`**

from field: string description = 14;

#### Defined in

[src/currencies.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L512)

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

[src/currencies.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L430)

___

### exponentName

• **exponentName**: `string` = `""`

**`Description`**

The technical term or label for the currency's fractional sub-unit (often mapping conceptually to the minor unit/exponent).

**`Example`**

```ts
"Cent"
```

**`Generated`**

from field: string exponent_name = 13;

#### Defined in

[src/currencies.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L502)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

**`Description`**

Comprehensive audit trail of every operation performed on this record.

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/currencies.scailo_pb.ts:462](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L462)

___

### mantissaName

• **mantissaName**: `string` = `""`

**`Description`**

The technical term or label for the currency's major or primary unit (often mapping conceptually to the whole integer part/mantissa).

**`Example`**

```ts
"Dollar"
```

**`Generated`**

from field: string mantissa_name = 12;

#### Defined in

[src/currencies.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L492)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/currencies.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L438)

___

### name

• **name**: `string` = `""`

**`Description`**

The official or canonical name of the currency.

**`Example`**

```ts
"US Dollar"
```

**`Generated`**

from field: string name = 10;

#### Defined in

[src/currencies.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L472)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Description`**

The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/currencies.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L454)

___

### symbol

• **symbol**: `string` = `""`

**`Description`**

The unique symbol, shorthand token, or ISO code by which the currency is structurally classified.

**`Example`**

```ts
"USD"
```

**`Generated`**

from field: string symbol = 11;

#### Defined in

[src/currencies.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L482)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L521)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L519)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Currency"``

#### Defined in

[src/currencies.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L520)

## Methods

### clone

▸ **clone**(): [`Currency`](Currency.md)

Create a deep copy.

#### Returns

[`Currency`](Currency.md)

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
| `other` | `undefined` \| ``null`` \| [`Currency`](Currency.md) \| `PlainMessage`\<[`Currency`](Currency.md)\> |

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

▸ **getType**(): `MessageType`\<[`Currency`](Currency.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Currency`](Currency.md)\>

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
| `a` | `undefined` \| [`Currency`](Currency.md) \| `PlainMessage`\<[`Currency`](Currency.md)\> |
| `b` | `undefined` \| [`Currency`](Currency.md) \| `PlainMessage`\<[`Currency`](Currency.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L546)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Currency`](Currency.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Currency`](Currency.md)

#### Defined in

[src/currencies.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L534)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Currency`](Currency.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Currency`](Currency.md)

#### Defined in

[src/currencies.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L538)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Currency`](Currency.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Currency`](Currency.md)

#### Defined in

[src/currencies.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L542)
