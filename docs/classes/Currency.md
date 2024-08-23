[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / Currency

# Class: Currency

Describes the parameters that are part of a standard response

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

src/currencies.scailo_pb.ts:350

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Currencies the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/currencies.scailo_pb.ts:299

___

### description

• **description**: `string` = `""`

The description of the currency

**`Generated`**

from field: string description = 14;

#### Defined in

src/currencies.scailo_pb.ts:348

___

### entityUuid

• **entityUuid**: `string` = `""`

Currencies a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/currencies.scailo_pb.ts:285

___

### exponentName

• **exponentName**: `string` = `""`

The name of the exponent

**`Generated`**

from field: string exponent_name = 13;

#### Defined in

src/currencies.scailo_pb.ts:341

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Currencies the logs of every operation performed on this currency

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/currencies.scailo_pb.ts:313

___

### mantissaName

• **mantissaName**: `string` = `""`

The name of the mantissa

**`Generated`**

from field: string mantissa_name = 12;

#### Defined in

src/currencies.scailo_pb.ts:334

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Currencies the metadata of this currency

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/currencies.scailo_pb.ts:292

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 10;

#### Defined in

src/currencies.scailo_pb.ts:320

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this currency

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/currencies.scailo_pb.ts:306

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 11;

#### Defined in

src/currencies.scailo_pb.ts:327

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/currencies.scailo_pb.ts:357

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/currencies.scailo_pb.ts:355

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Currency"``

#### Defined in

src/currencies.scailo_pb.ts:356

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

src/currencies.scailo_pb.ts:382

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

src/currencies.scailo_pb.ts:370

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

src/currencies.scailo_pb.ts:374

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

src/currencies.scailo_pb.ts:378
