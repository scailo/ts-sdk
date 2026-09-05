[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceAutofillRequest

# Class: SalesInvoicesServiceAutofillRequest

Request message for triggering an autofill operation on an existing Sales Invoice.
This operation automatically populates the invoice with relevant line items (and optionally services)
by pulling them directly from the associated source document (e.g., the parent Sales Order).

**Note:** The invoice must already be created and explicitly linked to a source reference
before this operation can be invoked.

**`Generated`**

from message Scailo.SalesInvoicesServiceAutofillRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\>

  ↳ **`SalesInvoicesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceAutofillRequest.md#constructor)

### Properties

- [includeServices](SalesInvoicesServiceAutofillRequest.md#includeservices)
- [userComment](SalesInvoicesServiceAutofillRequest.md#usercomment)
- [uuid](SalesInvoicesServiceAutofillRequest.md#uuid)
- [fields](SalesInvoicesServiceAutofillRequest.md#fields)
- [runtime](SalesInvoicesServiceAutofillRequest.md#runtime)
- [typeName](SalesInvoicesServiceAutofillRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceAutofillRequest.md#clone)
- [equals](SalesInvoicesServiceAutofillRequest.md#equals)
- [fromBinary](SalesInvoicesServiceAutofillRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceAutofillRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceAutofillRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceAutofillRequest.md#gettype)
- [toBinary](SalesInvoicesServiceAutofillRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceAutofillRequest.md#tojson)
- [toJson](SalesInvoicesServiceAutofillRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceAutofillRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceAutofillRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceAutofillRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceAutofillRequest**(`data?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L877)

## Properties

### includeServices

• `Optional` **includeServices**: `boolean`

**`Optional`**

**`Description`**

A boolean flag indicating whether service-type line items should also be pulled from the source document during the autofill operation (in addition to standard physical inventory goods).

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional bool include_services = 10;

#### Defined in

[src/sales_invoices.scailo_pb.ts:875](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L875)

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

[src/sales_invoices.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L843)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target sales invoice that needs to be autofilled.

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

[src/sales_invoices.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L859)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L884)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L882)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceAutofillRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L883)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L902)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L890)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L894)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceAutofillRequest`](SalesInvoicesServiceAutofillRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_invoices.scailo_pb.ts#L898)
