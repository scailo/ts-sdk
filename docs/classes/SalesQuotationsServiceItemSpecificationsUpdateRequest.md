[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceItemSpecificationsUpdateRequest

# Class: SalesQuotationsServiceItemSpecificationsUpdateRequest

Request message for isolating updates strictly to the textual specifications or notes
of a Sales Quotation line item.
Designed for scenarios where operational instructions change without impacting any
commercial terms, pricing, or quantities.

**`Generated`**

from message Scailo.SalesQuotationsServiceItemSpecificationsUpdateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\>

  ↳ **`SalesQuotationsServiceItemSpecificationsUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#constructor)

### Properties

- [specifications](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#specifications)
- [userComment](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#usercomment)
- [uuid](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#uuid)
- [fields](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#fields)
- [runtime](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#runtime)
- [typeName](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#clone)
- [equals](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#tojson)
- [toJson](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceItemSpecificationsUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceItemSpecificationsUpdateRequest**(`data?`): [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceItemSpecificationsUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2128)

## Properties

### specifications

• **specifications**: `string` = `""`

**`Mandatory`**

**`Description`**

The completely overwritten textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Expedite handling required. Use pallet configuration A."
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2126](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2126)

___

### userComment

• `Optional` **userComment**: `string`

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

from field: optional string user_comment = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2094](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2094)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target record that needs to be updated.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2110](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2110)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2135)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2133](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2133)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceItemSpecificationsUpdateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:2134](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2134)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2153](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2153)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2141](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2141)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2145)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemSpecificationsUpdateRequest`](SalesQuotationsServiceItemSpecificationsUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2149](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L2149)
