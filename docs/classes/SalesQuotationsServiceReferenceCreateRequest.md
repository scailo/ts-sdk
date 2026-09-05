[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceReferenceCreateRequest

# Class: SalesQuotationsServiceReferenceCreateRequest

Request message for creating and linking an external or internal document reference to a Sales Quotation.
These references (e.g., tying a Sales Enquiry to a Sales Quotation) serve as the operational constraints
that drive downstream automation, such as Autofill operations that pull line items directly from the referenced document.

**`Generated`**

from message Scailo.SalesQuotationsServiceReferenceCreateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\>

  ↳ **`SalesQuotationsServiceReferenceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceReferenceCreateRequest.md#constructor)

### Properties

- [context](SalesQuotationsServiceReferenceCreateRequest.md#context)
- [refFrom](SalesQuotationsServiceReferenceCreateRequest.md#reffrom)
- [refId](SalesQuotationsServiceReferenceCreateRequest.md#refid)
- [salesQuotationId](SalesQuotationsServiceReferenceCreateRequest.md#salesquotationid)
- [userComment](SalesQuotationsServiceReferenceCreateRequest.md#usercomment)
- [fields](SalesQuotationsServiceReferenceCreateRequest.md#fields)
- [runtime](SalesQuotationsServiceReferenceCreateRequest.md#runtime)
- [typeName](SalesQuotationsServiceReferenceCreateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceReferenceCreateRequest.md#clone)
- [equals](SalesQuotationsServiceReferenceCreateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceReferenceCreateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceReferenceCreateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceReferenceCreateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceReferenceCreateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceReferenceCreateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceReferenceCreateRequest.md#tojson)
- [toJson](SalesQuotationsServiceReferenceCreateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceReferenceCreateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceReferenceCreateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceReferenceCreateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceReferenceCreateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceReferenceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceReferenceCreateRequest**(`data?`): [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceReferenceCreateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:4134](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4134)

## Properties

### context

• **context**: [`SALES_QUOTATION_REFERENCE_CONTEXT`](../enums/SALES_QUOTATION_REFERENCE_CONTEXT.md) = `SALES_QUOTATION_REFERENCE_CONTEXT.SALES_QUOTATION_REFERENCE_CONTEXT_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The operational context in which this reference is being applied (e.g., Billing).

**`Example`**

```ts
"SALES_QUOTATION_REFERENCE_CONTEXT_BILLING"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_QUOTATION_REFERENCE_CONTEXT enum value. Cannot be unspecified (0).

**`Generated`**

from field: Scailo.SALES_QUOTATION_REFERENCE_CONTEXT context = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4100](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4100)

___

### refFrom

• **refFrom**: [`SALES_QUOTATION_REFERENCE_REF_FROM`](../enums/SALES_QUOTATION_REFERENCE_REF_FROM.md) = `SALES_QUOTATION_REFERENCE_REF_FROM.SALES_QUOTATION_REFERENCE_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

The specific module or record type from which this reference originates.

**`Example`**

```ts
"SALES_QUOTATION_REFERENCE_REF_FROM_SALES_ENQUIRY"
```

**`Regex`**

^[A-Z_]+$

**`Format`**

Valid SALES_QUOTATION_REFERENCE_REF_FROM enum value. Cannot be unspecified (0).

**`Generated`**

from field: Scailo.SALES_QUOTATION_REFERENCE_REF_FROM ref_from = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4116](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4116)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the specific referenced document (e.g., the ID of the actual Sales Enquiry).

**`Example`**

```ts
450
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4132](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4132)

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent sales quotation to which this reference is being attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4084](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4084)

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

[src/sales_quotations.scailo_pb.ts:4068](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4068)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4141](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4141)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4139](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4139)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceReferenceCreateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:4140](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4140)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4161)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4149](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4149)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4153](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4153)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceReferenceCreateRequest`](SalesQuotationsServiceReferenceCreateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4157](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4157)
