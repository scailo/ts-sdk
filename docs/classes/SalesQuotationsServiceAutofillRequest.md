[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceAutofillRequest

# Class: SalesQuotationsServiceAutofillRequest

Request message for triggering an autofill operation on an existing Sales Quotation.
This operation automatically populates the sales quotation with relevant line items based
on previously attached constraints and source references (e.g., linked Sales Enquiries).

**Note:** The typical workflow requires the parent sales quotation to be created and
its reference links established first. Once invoked, this payload signals the system
to pull the corresponding line items from those references to automatically build out the quotation.

**`Generated`**

from message Scailo.SalesQuotationsServiceAutofillRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\>

  ↳ **`SalesQuotationsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceAutofillRequest.md#constructor)

### Properties

- [userComment](SalesQuotationsServiceAutofillRequest.md#usercomment)
- [uuid](SalesQuotationsServiceAutofillRequest.md#uuid)
- [fields](SalesQuotationsServiceAutofillRequest.md#fields)
- [runtime](SalesQuotationsServiceAutofillRequest.md#runtime)
- [typeName](SalesQuotationsServiceAutofillRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceAutofillRequest.md#clone)
- [equals](SalesQuotationsServiceAutofillRequest.md#equals)
- [fromBinary](SalesQuotationsServiceAutofillRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceAutofillRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceAutofillRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceAutofillRequest.md#gettype)
- [toBinary](SalesQuotationsServiceAutofillRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceAutofillRequest.md#tojson)
- [toJson](SalesQuotationsServiceAutofillRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceAutofillRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceAutofillRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceAutofillRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceAutofillRequest**(`data?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L998)

## Properties

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

from field: string user_comment = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:980](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L980)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target sales quotation that needs to be autofilled.

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

[src/sales_quotations.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L996)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1005)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1003](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1003)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceAutofillRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:1004](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1004)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1022)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1010)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1014](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1014)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceAutofillRequest`](SalesQuotationsServiceAutofillRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1018](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L1018)
