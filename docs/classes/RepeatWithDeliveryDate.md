[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RepeatWithDeliveryDate

# Class: RepeatWithDeliveryDate

Request message for duplicating an existing record while projecting it onto a new timeline.
This payload identifies the source record to be cloned and provides the mandatory overrides
(such as a new reference ID and delivery date) required to instantiate the new entity.

**Note:** This is commonly used in procurement and sales workflows to rapidly recreate
frequent or recurring orders without manually re-entering line items and complex configurations.

**`Generated`**

from message Scailo.RepeatWithDeliveryDate

## Hierarchy

- `Message`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\>

  ↳ **`RepeatWithDeliveryDate`**

## Table of contents

### Constructors

- [constructor](RepeatWithDeliveryDate.md#constructor)

### Properties

- [deliveryDate](RepeatWithDeliveryDate.md#deliverydate)
- [referenceId](RepeatWithDeliveryDate.md#referenceid)
- [userComment](RepeatWithDeliveryDate.md#usercomment)
- [uuid](RepeatWithDeliveryDate.md#uuid)
- [fields](RepeatWithDeliveryDate.md#fields)
- [runtime](RepeatWithDeliveryDate.md#runtime)
- [typeName](RepeatWithDeliveryDate.md#typename)

### Methods

- [clone](RepeatWithDeliveryDate.md#clone)
- [equals](RepeatWithDeliveryDate.md#equals)
- [fromBinary](RepeatWithDeliveryDate.md#frombinary)
- [fromJson](RepeatWithDeliveryDate.md#fromjson)
- [fromJsonString](RepeatWithDeliveryDate.md#fromjsonstring)
- [getType](RepeatWithDeliveryDate.md#gettype)
- [toBinary](RepeatWithDeliveryDate.md#tobinary)
- [toJSON](RepeatWithDeliveryDate.md#tojson)
- [toJson](RepeatWithDeliveryDate.md#tojson-1)
- [toJsonString](RepeatWithDeliveryDate.md#tojsonstring)
- [equals](RepeatWithDeliveryDate.md#equals-1)
- [fromBinary](RepeatWithDeliveryDate.md#frombinary-1)
- [fromJson](RepeatWithDeliveryDate.md#fromjson-1)
- [fromJsonString](RepeatWithDeliveryDate.md#fromjsonstring-1)

## Constructors

### constructor

• **new RepeatWithDeliveryDate**(`data?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Overrides

Message\&lt;RepeatWithDeliveryDate\&gt;.constructor

#### Defined in

[src/base.scailo_pb.ts:2497](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2497)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Mandatory`**

**`Description`**

The target delivery date to be applied to the newly created record, overriding the schedule of the original source.

**`Example`**

```ts
"2023-12-31"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/base.scailo_pb.ts:2495](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2495)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/base.scailo_pb.ts:2479](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2479)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/base.scailo_pb.ts:2463](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2463)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the source record that serves as the blueprint for duplication.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string uuid = 1;

#### Defined in

[src/base.scailo_pb.ts:2447](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2447)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/base.scailo_pb.ts:2504](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2504)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/base.scailo_pb.ts:2502](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2502)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RepeatWithDeliveryDate"``

#### Defined in

[src/base.scailo_pb.ts:2503](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2503)

## Methods

### clone

▸ **clone**(): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

Create a deep copy.

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

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
| `other` | `undefined` \| ``null`` \| [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md) \| `PlainMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |

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

▸ **getType**(): `MessageType`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\>

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
| `a` | `undefined` \| [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md) \| `PlainMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |
| `b` | `undefined` \| [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md) \| `PlainMessage`\<[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)\> |

#### Returns

`boolean`

#### Defined in

[src/base.scailo_pb.ts:2523](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2523)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Defined in

[src/base.scailo_pb.ts:2511](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2511)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Defined in

[src/base.scailo_pb.ts:2515](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2515)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RepeatWithDeliveryDate`](RepeatWithDeliveryDate.md)

#### Defined in

[src/base.scailo_pb.ts:2519](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/base.scailo_pb.ts#L2519)
